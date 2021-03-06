const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();


//----GetRoutes----//
//router that takes the closet or bin id to fetch all items in that closet or bin from the database
router.get('/:id', (req, res) => {
  console.log('items GET:', req.params);
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


//----PostRoutes----//
//POST route to add a new item to a bin
router.post('/', (req, res) => {
  console.log('items POST:', req.body);
  const queryString = `INSERT INTO items ( description, size, image, closet_bin_id ) VALUES ( $1, $2, $3, $4 )`;
  const values = [req.body.description, req.body.size, req.body.image, req.body.closet_bin_id]
  
  pool.query(queryString, values)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Error in Items POST route', err);
      res.sendStatus(500);
    });
})//end items POST


//----PutRoutes----//
// PUT Route to update name for a closet or bin
router.put('/', (req, res) => {
  console.log('items PUT body:',req.body);
  const queryString = `UPDATE items SET closet_bin_id = $1 WHERE id = $2`;
  const values = [req.body.newLocation, req.body.itemID];
  pool.query(queryString, values)
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('Error in items.router PUT route', err);
    res.sendStatus(500);
  });
}) // end update item location PUT Route


//----DeleteRoutes----//
// DELETE Route to remove an item from a closet or bin
router.delete('/:id', (req, res) => {
  console.log( 'In the delete router', req.params);
  const queryString = `DELETE from items WHERE id = $1`;
  const values = [req.params.id];
  pool.query(queryString, values)
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('Error in items.router DELETE route', err);
    res.sendStatus(500);
  });
}) // end delete Route

module.exports = router;
