const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))


router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('http://localhost:8080/#/home')
});

router.get('/logout', (req, res) => {
  req.logout()
  res.send('logged out')
})

module.exports = router
