const Trial = require('../models/Trial.js');
const validator = require('validator');

const submitTrial = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;


    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

   
    if (!validator.isMobilePhone(phone, 'any')) {
      return res.status(400).json({ message: 'Invalid phone number' });
    }

    const trial = new Trial({ name, email, phone, message });
    await trial.save();

    res.status(201).json({ message: 'Trial form submitted successfully' });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: `Server error ${err}` });
  }
};

module.exports = {
  submitTrial,
};
