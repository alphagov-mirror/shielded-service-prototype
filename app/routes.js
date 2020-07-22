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

router.post('/uj3/nhs-login-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const nhslogin = req.session.data['nhs-login']

    if (nhslogin === 'false') {
        res.redirect('1')
    } else {
        res.redirect('https://svps-nhs-login.herokuapp.com/uj3/enter-email')
    }
})

router.post('/uj3/before-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const before = req.session.data['serv-before']

    if (before === 'false') {
        res.redirect('1')
    } else {
        res.redirect('30')
    }
})

router.post('/uj3/create-account-check', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var createaccount = req.session.data['createaccount']

    // Check whether the variable matches a condition
    if (createaccount == "True") {
        // Send user to next page
        res.redirect('https://svps-nhs-login.herokuapp.com/uj3/enter-email')
    } else if (createaccount == "Verify") {
        // Send user to next page
        res.redirect('/uj3/verify')
    } else {
        // Send user to ineligible page
        res.redirect('/uj3/44')
    }
})

router.post('/uj3/create-account-check2', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var createaccount = req.session.data['createaccount']

    // Check whether the variable matches a condition
    if (createaccount == "False") {
        // Send user to next page
        res.redirect('/uj3/44')
    } else {
        // Send user to ineligible page
        res.redirect('https://svps-nhs-login.herokuapp.com/uj3/enter-email')
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

router.post('/uj4/nhs-login-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const nhslogin = req.session.data['nhs-login']

    if (nhslogin === 'false') {
        res.redirect('1')
    } else {
        res.redirect('https://svps-nhs-login.herokuapp.com/uj4/enter-email')
    }
})

router.post('/uj4/before-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const before = req.session.data['serv-before']

    if (before === 'false') {
        res.redirect('1')
    } else {
        res.redirect('30')
    }
})

router.post('/uj4/create-account-check', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var createaccount = req.session.data['createaccount']

    // Check whether the variable matches a condition
    if (createaccount == "True") {
        // Send user to next page
        res.redirect('https://svps-nhs-login.herokuapp.com/uj4/enter-email')
    } else if (createaccount == "Verify") {
        // Send user to next page
        res.redirect('/uj4/verify')
    } else {
        // Send user to ineligible page
        res.redirect('/uj4/44')
    }
})

router.post('/uj4/create-account-check2', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var createaccount = req.session.data['createaccount']

    // Check whether the variable matches a condition
    if (createaccount == "False") {
        // Send user to next page
        res.redirect('/uj4/44')
    } else {
        // Send user to ineligible page
        res.redirect('https://svps-nhs-login.herokuapp.com/uj4/enter-email')
    }
})


router.post('/uj4/shield-check', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var shield = req.session.data['shield']

    // Check whether the variable matches a condition
    if (shield == "shield") {
        // Send user to next page
        res.redirect('/uj4/1-e')
    } else {
        // Send user to ineligible page
        res.redirect('/uj4/88')
    }
})

router.post('/uj4/conditions-check', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var conditions = req.session.data['medical_conditions']

    // Check whether the variable matches a condition
    if (conditions == "True") {
        // Send user to next page
        res.redirect('/uj4/1-e')
    } else {
        // Send user to ineligible page
        res.redirect('/uj4/sorry')
    }
})

router.post('/uj4/check-england', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var country = req.session.data['country']

    // Check whether the variable matches a condition
    if (country == "True") {
        // Send user to next page
        res.redirect('/uj4/17')
    } else {
        // Send user to ineligible page
        res.redirect('/uj4/sorry-england-only')
    }
})

router.post('/uj5/nhs-login-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const nhslogin = req.session.data['nhs-login']

    if (nhslogin === 'false') {
        res.redirect('1')
    } else {
        res.redirect('https://svps-nhs-login.herokuapp.com/uj5/enter-email')
    }
})

router.post('/uj5/before-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const before = req.session.data['serv-before']

    if (before === 'false') {
        res.redirect('1')
    } else {
        res.redirect('30')
    }
})

router.post('/uj5/create-account-check', function (req, res) {

    // Make a variable and give it the value from 'createaccount'
    var createaccount = req.session.data['createaccount']

    // Check whether the variable matches a condition
    if (createaccount == "yes") {
        // Send user to next page
        res.redirect('https://svps-nhs-login.herokuapp.com/uj5/enter-email')
    } else {
        // Send user to confirmation page
        res.redirect('/uj5/confirmation')
    }
})

router.post('/uj5/create-account-check2', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var createaccount = req.session.data['createaccount']

    // Check whether the variable matches a condition
    if (createaccount == "False") {
        // Send user to next page
        res.redirect('/uj5/44')
    } else {
        // Send user to ineligible page
        res.redirect('https://svps-nhs-login.herokuapp.com/uj5/enter-email')
    }
})


router.post('/uj5/shield-check', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var shield = req.session.data['shield']

    // Check whether the variable matches a condition
    if (shield == "shield") {
        // Send user to next page
        res.redirect('/uj5/nhs-number')
    } else {
        // Send user to ineligible page
        res.redirect('/uj5/medical-conditions')
    }
})

router.post('/uj5/conditions-check', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var conditions = req.session.data['medical_conditions']

    // Check whether the variable matches a condition
    if (conditions == "True") {
        // Send user to next page
        res.redirect('/uj5/nhs-number')
    } else {
        // Send user to ineligible page
        res.redirect('/uj5/sorry')
    }
})

router.post('/uj5/check-england', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var country = req.session.data['country']

    // Check whether the variable matches a condition
    if (country == "True") {
        // Send user to next page
        res.redirect('/uj5/eligibility-2')
    } else {
        // Send user to ineligible page
        res.redirect('/uj5/sorry-england-only')
    }
})


router.post('/uj5/yourself', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var yourself = req.session.data['yourself']

    // Check whether the variable matches a condition
    if (yourself == "Myself") {
        // Send user to next page
        res.redirect('/uj5/do-you-have-nhs-login')
    } else {
        // Send user to ineligible page
        res.redirect('/uj5/postcode')
    }
})


router.post('/uj5/has-nhs-login', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var nhslogin = req.session.data['have-nhs-login']

    // Check whether the variable matches a condition
    if (nhslogin == "Yes") {
        // Send user to next page
        res.redirect('/uj5/nhs-login')
    } else {
        // Send user to ineligible page
        res.redirect('/uj5/postcode')
    }
})

module.exports = router
