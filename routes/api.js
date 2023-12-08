const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid')

router.get('/notes', (req, res) => {
    const noteDataJson = JSON.parse(fs.readFileSync('./db/db.json','utf8'))
    res.json(noteDataJson)
})

router.post('/notes', (req, res) => {
    const noteDataJson = JSON.parse(fs.readFileSync('./db/db.json','utf8'))
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    noteDataJson.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(noteDataJson));
    // res.json(noteDataJson);
});

module.exports = router