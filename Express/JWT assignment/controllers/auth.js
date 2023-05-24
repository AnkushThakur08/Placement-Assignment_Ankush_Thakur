const User = require('../models/user');
const { check, body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

exports.signup = async (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      parameter: errors.array()[0].param,
    });
  }

  try {
    const user = new User(req.body);
    await user.save();

    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({
      error: 'Unable to create user',
    });
  }
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      parameter: errors.array()[0].param,
    });
  }

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          error: 'User Email does not exist',
        });
      }

      if (!user.autheticate(password)) {
        return res.status(401).json({
          error: 'Email & Password do not match',
        });
      }

      // Create a Token
      const token = jwt.sign({ _id: user._id }, process.env.SECRET);

      // Put token into cookie
      res.cookie('token', token, { expire: new Date() + 9999 });

      // Sending Response to the front end
      const { _id, name, email, role } = user;
      res.json({ token, user: { _id, name, email, role } });
    })
    .catch((error) => {
      console.error('Error finding user:', error);
      res.status(400).json({
        error: 'User Email does not exist',
      });
    });
};

exports.signout = (req, res) => {
  res.clearCookie('token'); // Clear the cookier whose name is Token
  res.json({
    user: 'User Signout Successfully',
  });
};

// Protected Routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  algorithms: ['HS256'],
  userProperty: 'auth', // This auth contents _id of the user
});
