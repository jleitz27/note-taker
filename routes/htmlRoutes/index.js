const path = require('path');
const router = require('express').Router();

// route to index.html 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/index.html'));
}); 

// route to notes.html 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/notes.html'));
}); 

//wildcard route
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
module.exports= router;