require('dotenv').config()
const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const commentRoute = require("./routes/comment");
const { connectToDB } = require("./services/connectToDB");
const { checkForAuthenticationToken } = require("./middlewares/authentication");
const Blog = require("./models/blog");

const app = express();
const PORT = process.env.PORT || 8000;

connectToDB(process.env.MONGO_URL).then(() => {
  console.log("MongoDB is connected...");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationToken("token"));
app.use(express.static(path.resolve("./public")));

app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);
app.use("/blog/comment", commentRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
