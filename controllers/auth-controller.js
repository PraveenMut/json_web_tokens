const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET);
}

// auth post endpoint goes here
const register = (req, res) => {
  // object deconstruction to access username and password
  // search the database for the user with mongoose method like .findOne(), make sure the username doesn't already exist  
  // if the username does exist send an error response
  // create the new user using mongoose, method like .create()
  // req.body is new user
  const token = generateToken(req.body)
  return res.send({token: token})
}

module.exports = {
  register
}