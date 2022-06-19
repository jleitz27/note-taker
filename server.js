// requiring express 
const express = require('express');
// const fs = require('fs');
// const path = require('path'); 

// if port is any route or 3001
const PORT = process.env.PORT || 3001; 
// start the server
const app = express(); 


// //to do: get routes working
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

// // Use apiRoutes
// app.use('/api/notes', apiRoutes);
// app.use('/', htmlRoutes);




app.use(express.urlencoded ( { extended: true }));

app.use(express.json());
//staticly set public folder
app.use(express.static('public')); 




// request data from notes
const { notes } = require('./db/db.json');

// function taking the data from req.body 
function createNote (body, notesArray) {
    const note = body; 
    notesArray.push(note); 


    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
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

//API routes, gets, posts, and deletes 

// route GET 
app.get('/api/notes', (req, res) => {
    res.json(notes); 
});


app.post('/api/notes', (req, res) => {
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
app.delete('/api/notes/:id', (req, res) => {
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

//html routes
// route to index.html 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
}); 

// route to notes.html 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
}); 






// chain listen() method onto our servers
app.listen(PORT, () => { 
    console.log(`API server now on port ${PORT}!`);
});