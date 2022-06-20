// requiring express 
const express = require('express');

// if port is any route or 3001
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// chain listen() method onto our servers
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});