// requiring express 
const express = require('express');
const fs = require('fs');
const path = require('path'); 

// if port is any route or 3001
const PORT = process.env.PORT || 3001; 

// instantiate the server
const app = express(); 

// parse incoming string or array data
app.use(express.urlencoded ( { extended: true }));
// parse incoming JSON data
app.use(express.json());
// middleware for public files
app.use(express.static('public')); 

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});