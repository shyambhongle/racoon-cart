const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('./../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('./../validation/register');
const validateLoginInput = require('./../validation/login');

// Load User model
const User = require('./../models/user');




router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already registerd';
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save()
        .then(user => {
          const payload = {
             id: user.id,
             email:user.email}; // Create JWT payload
            // Sign Token
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                console.log(user);
                res.json({
                  success: true,
                  token: 'Bearer ' + token,
                  order:user.orders,
                  cart:user.cart,
                  pass:user._id=="5d3353168efff81ad8102d4c"?false:true
                });
              }
            );
          })
        .catch(err => console.log(err));
        });
      });
      }
    });
  });




router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
      // Check for user
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }

      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {


        // User Matched

        const payload = {
           id: user.id,
           email:user.email}; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            console.log(user);

            res.json({
              success: true,
              token: 'Bearer ' + token,
              order:user.orders,
              cart:user.cart,
              pass:user._id=="5d3353168efff81ad8102d4c"?false:true
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});



router.post('/changepassword',passport.authenticate('jwt',{session:false}),(req,res)=>{
  User.findById(req.user.id)
      .exec()
      .then(user=>{
        bcrypt.compare(req.body.current, user.password).then(isMatch => {
          if (isMatch){
            let updatePwd;
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(req.body.newpassword, salt, (err, hash) => {
                if (err) throw err;
                User.findOneAndUpdate(
                  {_id:req.user.id},
                  {$set:{password:hash}},
                  {new:true}
                ).then(re=>{res.json({"message":"successful"})});
              });
            });
          }
          else {
            res.json({"message":"current password did not match"});
          }
        })
      })
})




module.exports = router;
