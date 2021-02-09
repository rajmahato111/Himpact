const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../models/User');
const Contact = require('../models/Contact');


// @route     DELETE api/contacts/:id
// @desc      Delete contact
// @access    Private
router.deleteMany('/:id', auth, async (req, res) => {
  try {
    let user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({msg: 'User not found'});

   
    if (user.user_id.toString() !== req.user_id.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    await User.findByIdAndRemove(req.params.id);

    res.json({msg: 'User removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
