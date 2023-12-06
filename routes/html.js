const router = require('express').Router();
const path = require('path');

router.use('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

router.use('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

module.exports = router