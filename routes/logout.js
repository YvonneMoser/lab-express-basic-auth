const express = require('express');
const router = express.Router();


//  GET '/logout'
router.get("/", (req, res, next) => {
  req.session.destroy((err) => {
    // can't access session here
    res.redirect("/login");
  });
});


module.exports = router;