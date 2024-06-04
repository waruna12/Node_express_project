const express = require('express');
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');
const validateTokenHandler = require('../middleware/validateTokenHandler');

// router.route('/').get((req, res) => {
//   res.status(200).json({ message: 'Get all contacts waruna' });
// });

router.use(validateTokenHandler);
router.route('/').get(getContacts).post(createContact);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
