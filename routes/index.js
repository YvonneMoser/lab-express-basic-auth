const express = require('express');
const router = express.Router();
const signupRouter = require("./signup");
const loginRouter = require("./login");
const logoutRouter = require("./logout");



router.use(`/signup`, signupRouter);
router.use(`/login`, loginRouter);
router.use(`/logout`, logoutRouter);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
