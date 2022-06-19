
const path = require('path');
const router = require('express').Router();



// request data from notes
const { notes } = require('../../db/db.json');
const { filterById, createNewNote, validateNotes } = require('../../lib/notes');


// route GET 
router.get('/api/notes', (req, res) => {
    res.json(notes); 
});


router.post('/api/notes', (req, res) => {
    // set id 
    req.body.id = notes.length.toString(); 

    
    if (!validateNotes(req.body)) {
        res.status(400).send('Please format this note.'); 
    
    } else {
    
        const note = createNewNote(req.body, notes); 

        res.json(note);
    }
});

// delete notes
router.delete('/api/notes/:id', (req, res) => {
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
