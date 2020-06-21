const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.post('/uj2/nhs-login-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const nhslogin = req.session.data['nhs-login']

    if (nhslogin === 'false') {
        res.redirect('38')
    } else {
        res.redirect('https://svps-nhs-login.herokuapp.com/uj2/enter-email')
    }
})

router.post('/uj3/create-account-check', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var createaccount = req.session.data['createaccount']

    // Check whether the variable matches a condition
    if (createaccount == "True") {
        // Send user to next page
        res.redirect('https://svps-nhs-login.herokuapp.com/uj3/enter-email')
    } else {
        // Send user to ineligible page
        res.redirect('/uj3/44')
    }
})


router.post('/uj3/shield-check', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var shield = req.session.data['shield']

    // Check whether the variable matches a condition
    if (shield == "shield") {
        // Send user to next page
        res.redirect('/uj3/1')
    } else {
        // Send user to ineligible page
        res.redirect('/uj3/88')
    }
})

router.post('/uj3/conditions-check', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var conditions = req.session.data['medical_conditions']

    // Check whether the variable matches a condition
    if (conditions == "True") {
        // Send user to next page
        res.redirect('/uj3/1')
    } else {
        // Send user to ineligible page
        res.redirect('/uj3/sorry')
    }
})

module.exports = router
