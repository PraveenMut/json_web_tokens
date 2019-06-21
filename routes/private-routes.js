// private routes go here
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { secrets } = require('../controllers/private-controller')


router.use((req, res, next) => {
  const { token } = req.headers
  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    if(err) {
     return res.send('Error has occured. Unauthorised'); 
    } else {
      console.log(decoded.username);
    }
  });   
  next()
})

router.get('/secrets', secrets)

module.exports = router;