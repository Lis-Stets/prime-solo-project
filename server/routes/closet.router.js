const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();

//router that takes user id to fetch all closets and bins from the database
router.get('/', (req, res) => {
  const queryString = `SELECT * FROM closet_bin WHERE user_id = $1 AND closet = $2;`;
  const values = [req.user.id, true]
  pool.query(queryString, values)
  .then( results =>{
    res.send( results.rows);
  })
  .catch( err =>{
    console.log( 'error in closet GET route', err);
    res.sendStatus(500)
  })
})//end closet GET

//POST route to add a new closet or bin
router.post('/add', (req, res) => {
  console.log(req.body);
  const queryString = `INSERT INTO closet_bin ( closet, name, user_id ) VALUES ( $1, $2, $3 )`;
  const values = [req.body.addClosetBinReducer, req.body.name, req.user.id]

  pool.query(queryString, values)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Error in Closet POST route', err);
      res.sendStatus(500);
    });
});// end add closet or bin POST

// PUT Route to update name for a closet or bin
router.put('/:id', (req, res) => {
  console.log(req.params);
  const queryString = `UPDATE closet_bin SET name='Imelda' WHERE id = $1`;
  const values = [req.params];
  pool.query(queryString, values)
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('Error in Closet.router POST route', err);
    res.sendStatus(500);
  });
}); // end update closet bin name PUT Route

module.exports = router;
