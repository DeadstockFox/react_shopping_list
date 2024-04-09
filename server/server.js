const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
const groceryRouter = require('./routes/grocery.router.js')
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
//app.use(bodyParser.json()); // needed for axios requests
app.use(express.json());
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`
app.use('/api/grocery', groceryRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});
