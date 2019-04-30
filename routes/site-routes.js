const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route ---
  } 	
  else if (req.path === '/'){
    res.render('index')
  }														//		|
  else {                          	//    |
  	res.redirect("/login");       	//    |
  }                                 //    |
}); // ------------------------------------                                
//     | 
//     V
router.get("/main", (req, res, next) => {
  res.render("main");
});

router.get("/private", (req, res, next) => {
  res.render("private");
});


// GET  '/'   home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Basic Authentication' });
});


module.exports = router;