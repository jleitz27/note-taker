// this is set in case more routes are to be added in the future to the api
const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notesRoutes');

router.use(notesRoutes);


module.exports = router;

