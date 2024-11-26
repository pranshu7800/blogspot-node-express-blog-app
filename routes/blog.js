const { Router } = require("express");
const router = Router();
const {renderAddNewBlogPage, handleAddNewBlog, upload, handleGetBlogByID} = require("../controllers/blog")

router.get("/add-new-blog", renderAddNewBlogPage);

router.post("/", upload.single("coverImage"), handleAddNewBlog);

router.get("/:id", handleGetBlogByID);


module.exports = router;
