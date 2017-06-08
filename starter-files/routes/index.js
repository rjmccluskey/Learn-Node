const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.render('hello', {
    name: req.query.name || 'Rich',
    title: 'Home'
  });
});

router.get('/reverse/:word', (req, res) => {
  const reverse = [...req.params.word].reverse().join('');
  res.send(reverse);
});

module.exports = router;
