const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// Privacy Page
router.get('/privacy', (req, res) => {
  res.render('privacy', { title: 'Privacy Policy' });
});

// Police Page
router.get('/police', (req, res) => {
  res.render('police', { title: 'Police' });
});

module.exports = router;
