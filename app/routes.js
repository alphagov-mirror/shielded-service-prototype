const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.post('/uj2/nhs-login-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const over18 = req.session.data['nhs-login']

    if (over18 === 'false') {
        res.redirect('http://www.bbc.co.uk')
    } else {
        res.redirect('http://www.sky.com')
    }
})


module.exports = router
