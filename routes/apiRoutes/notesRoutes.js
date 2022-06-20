
// const path = require('path');
const router = require('express').Router();

// request data from notes

const { createNote, noteValidate } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

// route GET 
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results); 
});

router.post('/notes', (req, res) => {
    // set id 
    req.body.id = notes.length.toString(); 

    
    if (!noteValidate(req.body)) {
        res.status(400).send('Please format this note.'); 
    
    } else {
    
        const note = createNote(req.body, notes); 

        res.json(note);
    }
});

// delete notes
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    let note;

    notes.map((element, index) => {
        if (element.id == id){
        note = element
        notes.splice(index, 1)
        return res.json(note);
        } 
    
    })
});

module.exports = router;
