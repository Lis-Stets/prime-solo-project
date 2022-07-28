const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();

//router that takes the closet or bin id to fetch all items in that closet or bin from the database
router.get('/:id', (req, res) => {
  const queryString = `SELECT * FROM items WHERE closet_bin_id = $1`;
  const values = [req.params.id]
  pool.query(queryString, values)
  .then( results =>{
    res.send( results.rows);
  })
  .catch( err =>{
    console.log( 'error in items GET route', err);
    res.sendStatus(500)
  })
})//end items GET

//POST route to add a new item to a bin
router.post('/add/:id', (req, res) => {
  const queryString = `INSERT INTO items ( description, size, image, closet_bin_id ) VALUES ( $1, $2, $3, $4 ) `;
  const values = [req.body.description, req.body.size, req.body.image, req.params.id]
  pool.query(queryString, values)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Error in Items POST route', err);
      res.sendStatus(500);
    });
})//end items POST

module.exports = router;
