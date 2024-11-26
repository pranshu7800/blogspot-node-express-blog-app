const { Router } = require("express");
const router = Router();
const {handleCreateNewComment} = require("../controllers/comment")

router.post("/:blogId", handleCreateNewComment);

module.exports = router;
