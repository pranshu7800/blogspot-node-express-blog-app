const { Router } = require("express");
const {
  renderSignInPage,
  renderSignUpPage,
  handleNewUserSignUp,
  handleUserSignIn,
  handleUserLogout,
} = require("../controllers/user");

const router = Router();

router.get("/signin", renderSignInPage);

router.get("/signup", renderSignUpPage);

router.post("/signup", handleNewUserSignUp);

router.post("/signin", handleUserSignIn);

router.get("/logout", handleUserLogout);

module.exports = router;
