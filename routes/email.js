// Common initial line for all routes
const router = require('express').Router();

let Email = require('../models/email');

router.route('/').get((req, res) => {
    // The find method returns a promise - a list of all the users
   
        Email.find()
        .then(email => res.json({data:email,success:true}))
        .catch(err => res.status(400).json('Error: ' + err));
 
});

router.route('/add').post((req,res) => {
   
    
    const newEmail = new Email({
        email:req.body.email,
    });

    newEmail.save()
        .then(() => res.json({data:'Email added!',success:true}))
        .catch(err => res.status(400).json('Error: ' + err));
});






// common export for all routes
module.exports = router;