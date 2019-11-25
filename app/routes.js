const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/start', function (req, res) {
  res.render('start', {'message' : 'Hello world'});
});

module.exports = router
