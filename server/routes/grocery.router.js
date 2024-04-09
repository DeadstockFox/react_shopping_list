const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET

router.get('/', (req, res) => {
    let qText = `SELECT * FROM "grocery" ORDER BY "name" ASC;`;
    pool.query(qText).then((r) => {
        res.send(r.rows); //sending database response to client
    }).catch((e) => {
        console.log('error in server-side GET request:', e)
    })

});

module.exports = router;