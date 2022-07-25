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


router.post('/add', (req, res) => {
  // const queryString = `INSERT INTO closet_bin ( closet, name, user_id ) VALUES ( $1, $2, $3 )`;
  // const values = [req.body.closet, req.body.name, req.user.id]

  // pool.query(queryString, values)
  //   .then(() => res.sendStatus(201))
  //   .catch((err) => {
  //     console.log('Error in Closet POST route', err);
  //     res.sendStatus(500);
  //   });
});

module.exports = router;
