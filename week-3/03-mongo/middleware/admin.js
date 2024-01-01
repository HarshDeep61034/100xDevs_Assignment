const { Admin } = require("../db/");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logicn
  const { username, password } = req.headers;
  const user = await Admin.findOne({ username });
  if (user) {
    next();
  } else {
    res.status(404).json({ err: "404 User Not Found" });
  }
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;

