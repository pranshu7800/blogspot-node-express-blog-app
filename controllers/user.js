const User = require("../models/user");
const renderSignInPage = (req, res) => {
  return res.render("signin");
};

const handleUserSignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect Email or Password!",
    });
  }
};

const renderSignUpPage = (req, res) => {
  return res.render("signup");
};

const handleNewUserSignUp = async (req, res) => {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });

  return res.redirect("/");
};

const handleUserLogout = (req, res) => {
  res.clearCookie("token").redirect("/");
};

module.exports = {
  renderSignInPage,
  renderSignUpPage,
  handleNewUserSignUp,
  handleUserSignIn,
  handleUserLogout,
};
