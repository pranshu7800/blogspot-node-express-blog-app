const jwt = require("jsonwebtoken");

const secret = "my$ecret@!#%";

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    profileImageURL: user.profileImageURL,
    role: user.role,
  };
  const token = jwt.sign(payload, secret);
  return token;
}

function validateUserToken(token) {
  const payload = jwt.verify(token, secret);
  return payload;
}

module.exports = {
  createTokenForUser,
  validateUserToken,
};
