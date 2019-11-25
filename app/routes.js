const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/start', function (req, res) {
	res.render('start', {'message' : 'Hello world'});
});

router.post('/juggling-balls-answers', function(req, res) {
	// Make a variable and give it the value from 'juggling-balls'
	var jugglingBalls = req.session.data['how-many-balls']

	// Check whether the variable matches a condition
	if (jugglingBalls === "3 or more"){
		// Send user to next page
		res.redirect('/juggling-trick')
	} else {
		// Send user to ineligible page
		res.redirect('/ineligible')
	}
})

module.exports = router
