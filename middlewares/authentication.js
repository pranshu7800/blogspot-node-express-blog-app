const { validateUserToken } = require("../services/authentication");

function checkForAuthenticationToken(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      return next();
    }

    try {
      const userPayload = validateUserToken(tokenCookieValue);
      req.user = userPayload;
    } catch (error) {}
    return next();
  };
}

module.exports = {
  checkForAuthenticationToken,
};
