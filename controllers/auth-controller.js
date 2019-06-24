const jwt = require('jsonwebtoken');
const response = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');


const generateToken = (user) => {
  const payLoad = { name };
  return jwt.sign(payload, process.env.JWT_SECRET);
}

const generateHash = async (password) => {
  const saltRounds = 10;
  const myHash = await bcrypt.hash(password, saltRounds);
  return myHash; // since the error is stored in the promise, it will be run in the try catch block in the main function, therefore you don't need the try and catch block in this function.
}

// auth post endpoint goes here
// const register = (req, res) => {
//   // object deconstruction to access username and password
//   // search the database for the user with mongoose method like .findOne(), make sure the username doesn't already exist  
//   // if the username does exist send an error response
//   // create the new user using mongoose, method like .create()
//   // req.body is new user
//   const token = generateToken(req.body)
//   return res.send({token: token})
// }

// const register = (req, res) => {
//   const {username, password, role } = req.body;
//   User.findOne({name: Username}).then((document) => {
//     if(document === null) {
//       // create the new user
//       // create the user using mongoose
//       // .then and you will have access to the new user
//     } else {
//       res.status(400).send("User already exists");
//     }
//   }).catch((exception) => {
//     res.status(500).send("broken code");
//   });
// }

const createUser = async (username, password, role) => {
  const userObject = new User({
    name: Username,
    password: password,
    role: role
  })
    return await userObject.save();
}

const register = async (req, res) => {
  const {username, password, role } = req.body;
  try {
  const user = await User.findOne({name: Username});
  if(user === null) {
    const hashedPassword = await generateHash(password);
    const newUser = await createUser(username, hashedPassword, role);
    const token = generateToken(newUser);
    return res.send({token: token})
  } else {
    res.status(400).send("User already exists");
  }
  console.log(user);
  } catch(exception) {
  console.log(exception);
  }
}



module.exports = {
  register
}