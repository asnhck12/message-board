const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { header: 'New Comment' });
});

router.post('/new', function(req, res, next) {
  const { cName, comment } = req.body;

  messages.push({ text: comment, user: cName, added: new Date() });

  res.redirect('/');
});

module.exports = router;
