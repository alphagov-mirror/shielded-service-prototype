const express = require('express')
const getDefaultData = require('./user_data')
var userData = getDefaultData()
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

router.get('/uj5/supermarkets', function (req, res) {

    var someoneToGoShopping = req.session.data['someone-to-go-shopping']

    // only show supermarkets question to people who have no one to go shopping
    if (someoneToGoShopping == "No") {
        res.render('uj5/supermarkets')
    } else {
        res.redirect('/uj5/basic-care-needs')
    }
})


router.post('/uj6/nhs-login-answer', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const nhslogin = req.session.data['nhs-login']

    if (nhslogin === 'false') {
        res.redirect('1')
    } else {
        res.redirect('https://svps-nhs-login.herokuapp.com/uj6/enter-email')
    }
})

router.post('/uj6/before-answer', function (req, res) {
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

router.post('/uj6/create-account-check', function (req, res) {

    // Make a variable and give it the value from 'createaccount'
    var createaccount = req.session.data['createaccount']

    // Check whether the variable matches a condition
    if (createaccount == "yes") {
        // Send user to next page
        res.redirect('https://svps-nhs-login.herokuapp.com/uj6/enter-email')
    } else {
        // Send user to confirmation page
        res.redirect('/uj6/confirmation')
    }
})

router.post('/uj6/create-account-check2', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var createaccount = req.session.data['createaccount']

    // Check whether the variable matches a condition
    if (createaccount == "False") {
        // Send user to next page
        res.redirect('/uj6/44')
    } else {
        // Send user to ineligible page
        res.redirect('https://svps-nhs-login.herokuapp.com/uj6/enter-email')
    }
})


router.post('/uj6/shield-check', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var shield = req.session.data['shield']

    // Check whether the variable matches a condition
    if (shield == "shield") {
        // Send user to next page
        res.redirect('/uj6/nhs-number')
    } else {
        // Send user to ineligible page
        res.redirect('/uj6/medical-conditions')
    }
})

router.post('/uj6/conditions-check', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var conditions = req.session.data['medical_conditions']

    // Check whether the variable matches a condition
    if (conditions == "True") {
        // Send user to next page
        res.redirect('/uj6/nhs-number')
    } else {
        // Send user to ineligible page
        res.redirect('/uj6/sorry')
    }
})

router.post('/uj6/check-england', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var country = req.session.data['country']

    // Check whether the variable matches a condition
    if (country == "True") {
        // Send user to next page
        res.redirect('/uj6/eligibility-2')
    } else {
        // Send user to ineligible page
        res.redirect('/uj6/sorry-england-only')
    }
})


router.post('/uj6/yourself', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var yourself = req.session.data['yourself']

    // Check whether the variable matches a condition
    if (yourself == "Myself") {
        // Send user to next page
        res.redirect('/uj6/do-you-have-nhs-login')
    } else {
        // Send user to ineligible page
        res.redirect('/uj6/postcode')
    }
})


router.post('/uj6/has-nhs-login', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var nhslogin = req.session.data['have-nhs-login']

    // Check whether the variable matches a condition
    if (nhslogin == "Yes") {
        // Send user to next page
        res.redirect('/uj6/nhs-login')
    } else {
        // Send user to ineligible page
        res.redirect('/uj6/postcode')
    }
})

router.get('/uj6/supermarkets', function (req, res) {

    var someoneToGoShopping = req.session.data['someone-to-go-shopping']

    // only show supermarkets question to people who have no one to go shopping
    if (someoneToGoShopping == "No") {
        res.render('uj6/supermarkets')
    } else {
        res.redirect('/uj6/basic-care-needs')
    }
})


//LA Support tool//

// Add your routes here - above the module.exports line
router.get('/home', function (req, res) {
    const nhsNumberError = req.session.nhsNumberError
    req.session.nhsNumberError = null

    res.render('home', {
        'error': nhsNumberError
    })
})


// Branching
router.post('/find', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const nhsNumber = req.session.data['nhs_number']

    if (userData[nhsNumber]) {
        req.session.nhsNumberError = null
        res.redirect(`/records/${nhsNumber}/validate`)
    }

    if (nhsNumber.length !== 10) {
        req.session.nhsNumberError = 'Invalid nhs number - nhs numbers need to be 10 numerical digits'
    } else {
        req.session.nhsNumberError = `Unknown nhs number - No data for ${nhsNumber} was found in the system`
    }

    res.redirect('/home')
})

// Branching
router.get('/records/:nhsNumber/validate', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
    const nhsNumber = req.params['nhsNumber']
    const dobError = req.session.dobConfirmError

    res.render('validate', {
        nhs_number: nhsNumber,
        error: dobError
    })
})

router.post('/records/:nhsNumber/validate', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const nhsNumber = req.params['nhsNumber']
    const day = req.session.data['date-of-birth-day']
    const month = req.session.data['date-of-birth-month']
    const year = req.session.data['date-of-birth-year']

    if (day !== '27' || month !== '3' || year !== '1945') {
        req.session.dobConfirmError = `Incorrect date of birth - try: 27 3 1945`
        res.redirect(`/records/${nhsNumber}/validate`)
    } else {
        req.session.dobConfirmError = null
        res.redirect(`/records/${nhsNumber}/summary`)
    }
})

// Branching
router.get('/records/:nhsNumber/supermarkets', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const nhsNumber = req.params['nhsNumber']

    const data = userData[nhsNumber]
    if (data) {
        res.render(`nhs_templates/supermarkets`, data)
    } else {
        req.session.data.nhsNumberError = nhsNumber
        res.redirect('/home')
    }
})

// Branching
router.get('/records/:nhsNumber/timeline', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const nhsNumber = req.params['nhsNumber']

    const data = userData[nhsNumber]
    if (data) {
        res.render(`nhs_templates/timeline`, data)
    } else {
        req.session.data.nhsNumberError = nhsNumber
        res.redirect('/home')
    }
})

// Branching
router.get('/records/:nhsNumber/summary', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    const nhsNumber = req.params['nhsNumber']

    const data = userData[nhsNumber]
    if (data) {
        res.render(`nhs_templates/summary`, data)
    } else {
        req.session.data.nhsNumberError = nhsNumber
        res.redirect('/home')
    }
})

// Branching
router.get('/records/:nhsNumber/summary/edit_phone_number', function (req, res) {
    // Get the answer from session data

    const nhsNumber = req.params['nhsNumber']

    const data = userData[nhsNumber]
    if (data) {
        res.render(`nhs_templates/summary_edit_phone`, data)
    } else {
        req.session.data.nhsNumberError = nhsNumber
        res.redirect('/home')
    }
})

// Branching
router.post('/records/:nhsNumber/summary/edit_phone_number', function (req, res) {
    // Get the answer from session data

    const nhsNumber = req.params['nhsNumber']

    if (userData[nhsNumber]) {
        userData[nhsNumber]['summary']['phone'] = req.body['phone-number']
    }
    res.redirect(`/records/${nhsNumber}/summary`)
})

// Branching
router.get('/records/:nhsNumber/summary/edit_email', function (req, res) {
    // Get the answer from session data

    const nhsNumber = req.params['nhsNumber']

    const data = userData[nhsNumber]
    if (data) {
        res.render(`nhs_templates/summary_edit_email`, data)
    } else {
        req.session.data.nhsNumberError = nhsNumber
        res.redirect('/home')
    }
})

// Branching
router.post('/records/:nhsNumber/summary/edit_email', function (req, res) {
    // Get the answer from session data

    const nhsNumber = req.params['nhsNumber']

    if (userData[nhsNumber]) {
        userData[nhsNumber]['summary']['email'] = req.body['email']
    }
    res.redirect(`/records/${nhsNumber}/summary`)
})


// Branching
router.get('/records/:nhsNumber/supermarkets/register', function (req, res) {
    // Get the answer from session data

    const nhsNumber = req.params['nhsNumber']

    const data = userData[nhsNumber]
    if (data) {
        res.render(`nhs_templates/supermarkets_register`, data)
    } else {
        req.session.data.nhsNumberError = nhsNumber
        res.redirect('/home')
    }
})

router.post('/records/:nhsNumber/supermarkets/register', function (req, res) {
    // Get the answer from session data

    const nhsNumber = req.params['nhsNumber']

    if (userData[nhsNumber]) {
        userData[nhsNumber].supermarkets.registered = {
            value: true,
            action: 'Support tool',
            date: 'Today'
        }
        userData[nhsNumber].supermarkets.inFile = true
    }
    res.redirect(`/records/${nhsNumber}/supermarkets`)
})

router.get('/clear-data', function (req, res) {
    // Get the answer from session data

    userData = getDefaultData()
    res.redirect('/home')
})


module.exports = router
