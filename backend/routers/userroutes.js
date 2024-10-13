const express = require('express');
const router = express.Router();
const User = require('../models/user.js')
const upload = require('../upload.js');


//route to enter the user data using "/submit" route to submit the data 
router.post('/submit', upload.array('images', 5), async (req, res) => {
  try {
    const imagePaths = req.files.map(file => file.path); 
    const user = new User({
      name: req.body.name,
      socialMediaHandle: req.body.socialMediaHandle,
      images: imagePaths
    });
    await user.save();
    res.status(201).send('User submitted successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Route to fetch all user submissions (for admin dashboard)
router.get('/submissions', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// create a admin login route where the admin is already registered in the database and we have to check the Credentials of the admin before loggin him in, could be created in the future, right now hardcoding the admin credentials in the front end 
//for this a seperate collection needs to be created in which two routes would be created one in which the admin data has to be stored 
//app.get('/adminregister', )  this route would be used on the backend just to feed the admin credentials to the database 
//and
//app.get('/adminlogincredentials', ) where the admin credentials will be called from database 



//also setup a delete route for deleting user information in admin dashboard

module.exports = router;
