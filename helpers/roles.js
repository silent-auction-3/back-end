function isAdmin(user) {
  return user.roleName === "admin";
}

function requiresRole(roleName) {
  return function (req, res, next) {
    if (req.user.roleName === roleName) {
      next();
    }
    else {
      res.status(403).json({ errorMessage: "User's role does not allow access to this resource" });
    }
  }
}

module.exports = {
  isAdmin,
  requiresRole
}