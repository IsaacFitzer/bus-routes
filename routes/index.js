var express = require('express');
var router = express.Router();
const passport = require('passport')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bus Routes' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/routes',
    failureRedirect: '/'
  }
))

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/')
  })
})

module.exports = router;
