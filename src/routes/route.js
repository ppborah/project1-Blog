const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");
const blogController = require("../controllers/blogController");

router.post("/authors", authorController.createAuthor);
router.post("/blogs", blogController.createBlog);
router.put("/blogs/:blogId", blogController.updateBlog)

router.get("/getBlogs", blogController.getBlogs);

module.exports = router;