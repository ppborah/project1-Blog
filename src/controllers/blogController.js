const blogModel = require("../models/blogModel");


const getBlogs = async function(req, res) {
    try {
        let collection = await blogModel.find({ $and: [{ $isPublished: true }, { $isDeleted: false }] })
            // res.status(200).send({ status: true, msg: collection })
        console.log(collection);
        if (!collection) {
            res.status(404).send({ status: false, msg: "Blogs Not Found" });
        } else {
            let data = req.query;
            let getByQuery = await blogModel.find(data);
            if (getByQuery.length <= 0) {
                res.status(404).send({ status: false, msg: 'Data Not Found' });
            } else {
                res.status(200).send({ status: true, data: getByQuery });
            }
        }
    } catch (error) {
        res.status(500).send({ status: false, error: error.message });
    }
}

module.exports.getBlogs = getBlogs