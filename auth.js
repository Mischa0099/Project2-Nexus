const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Sign Up Route
router.post('/signup', async (req, res) => {
    const { firstName, lastName, phoneCode, phoneNumber, email, password, country, city, address, postalCode } = req.body;
    try {
        const user = new User({
            firstName,
            lastName,
            phoneCode,
            phoneNumber,
            email,
            password,
            country,
            city,
            address,
            postalCode
        });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send('Error registering user');
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (error) {
        res.status(400).send('Error logging in');
    }
});

module.exports = router;
