function isUserAdminRole(user) {
  return user.role_name === "admin";
}

function requiresRole(roleName) {
  return function (req, res, next) {
    if (req.user.role_name === roleName) {
      next();
    }
    else {
      res.status(403).json({ errorMessage: "User's role does not allow access to this action or resource" });
    }
  }
}

module.exports = {
  isUserAdminRole,
  requiresRole
}