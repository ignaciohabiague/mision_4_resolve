const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => res.send('Route for retrieving user'));
router.post('/login', (req, res) => res.send('Route for posting user'));
router.get('/register', (req, res) => res.send('Route for retrieving new user'));
router.post('/register', (req, res) => res.send('Route for posting new user'));
router.get('/logout', (req, res) => res.send('Route for logging out'));

module.exports = route