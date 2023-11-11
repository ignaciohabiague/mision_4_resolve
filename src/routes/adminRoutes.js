const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Route for Admin View'));
router.get('/create', (req, res) => res.send('Route for admin creation'));
router.post('/create', (req, res) => res.send('Route for adding admin'));
router.get('/edit/:id', (req, res) => res.send('Route for editing admin with id'));
router.put('/edit/:id', (req, res) => res.send('Route for putting admin'));
router.delete('/delete/:id', (req, res) => res.send('Route for deleting admin'))

module.exports = route