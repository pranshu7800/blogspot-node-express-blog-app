const Comment = require("../models/comment");

const handleCreateNewComment = async (req, res) => {
  await Comment.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });
  return res.redirect(`/blog/${req.params.blogId}`);
};

module.exports = {
  handleCreateNewComment,
};
