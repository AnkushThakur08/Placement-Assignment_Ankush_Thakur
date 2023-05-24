const express = require('express');
const { signin, signup, signout, isSignedIn } = require('../controllers/auth');
const { check } = require('express-validator');

const router = express.Router();

router.post(
  '/signup',
  [
    [
      check('name').isLength({ min: 3 }).withMessage('Name must have 3 Characters'),
      check('email', 'Email is Required').isEmail(),
      check('password').isLength({ min: 4 }).withMessage('Password should be atleast of 4 Characters'),
    ],
  ],
  signup
);

router.post(
  '/signin',
  [
    [
      check('email').isEmail().withMessage('Email is Required'),
      check('password').isLength({ min: 1 }).withMessage('Password Field Required'),
    ],
  ],
  signin
);

router.get('/signout', signout);

router.get('/ankush', isSignedIn, (req, res) => {
  res.send('AUTHENTICATION');
});

module.exports = router;
