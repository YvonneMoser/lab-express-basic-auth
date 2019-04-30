const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require("./../models/user");

router.get(`/`, (req, res, next) => {
  res.render(`./auth/login`)
});


//  POST   '/login'
router.post("/", (req, res, next) => {
  const theUsername = req.body.username;
  const thePassword = req.body.password;

  if (theUsername === "" || thePassword === "") {
    res.render("auth/login", {errorMessage: 'Indicate username and password.'});
    return;
  }

  User.findOne({ "username": theUsername })
  .then(user => {
      if (!user) {
        res.render("auth/login", { errorMessage: 'The username doesn\'t exist.' });
        return;
      }
    
    	const passwordCorrect = bcrypt.compareSync(thePassword, user.password);
      
    	if (passwordCorrect) {  
        
        // Save the login in the session!
        // req.session is used to store values for our use
        req.session.currentUser = user;
        res.redirect("/");
        //res.render("/", {title: "Login success"});
      } 
    	else res.render("auth/login", { errorMessage: 'Incorrect password' });
  })
  .catch(error => next(error));
  
});



module.exports = router; 
