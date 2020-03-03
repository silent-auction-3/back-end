function isAdmin(user) {
  return user.role_name === "admin";
}

module.exports = {
  isAdmin
}