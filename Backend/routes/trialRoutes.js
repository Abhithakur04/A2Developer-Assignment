const express = require('express');

const router = express.Router();

router.post('/api/trial', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;


    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

   
    if (!validator.isMobilePhone(phone, 'en-IN')) {
      return res.status(400).json({ message: 'Invalid phone number' });
    }

    const trial = new Trial({ name, email, phone, message });
    await trial.save();

    res.status(201).json({ message: 'Trial form submitted successfully' });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: `Server error ${err}` });
  }
});

module.exports = router;

