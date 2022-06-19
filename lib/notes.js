const fs = require('fs');
const path = require('path');
const { notes } = require('../db/db.json');

// function taking the data from req.body 
function createNote (body, notesArray) {
    const note = body; 
    notesArray.push(note); 


    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes : notesArray }, null, 2)
    );
    
    return note; 
};

// validating data
function noteValidate (note) {
    if (!note.title || typeof note.title !== 'string') {
        return false; 
    }
    if (!note.text || typeof note.text !== "string") {
        return false;
    }
    return true;   
};

module.exports = {
    createNote,
    noteValidate
};