const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const validateTokenHandler = require('../middleware/validateTokenHandler');
const router = express.Router();

// router.route('/register').post((req, res) => {
//   res.status(200).json({ message: 'Register the user' });
// });

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', validateTokenHandler, currentUser);

module.exports = router;
