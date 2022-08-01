const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();

//----GetRoutes----//
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

//router that takes user id to fetch all bins from the database
router.get('/bin', (req, res) => {
  const query = `SELECT * FROM closet_bin WHERE user_id = $1 AND closet = $2;`;
  const values = [req.user.id, false]
  pool.query(query, values)
  .then( results =>{
    res.send( results.rows);
  })
  .catch( err =>{
    console.log( 'error in closet GET route', err);
    res.sendStatus(500)
  })
})//end bin GET

//router that takes user id and closet/bin id to this closet or bin's name from the database
router.get('/name/:id', (req, res) => {
  console.log('in name router', req.params );
  const query = `SELECT name FROM closet_bin WHERE user_id = $1 AND id = $2`;
  const values = [req.user.id, req.params.id]
  console.log('in name router VALUES', values );

  pool.query(query, values)
  .then( results =>{
    res.send( results.rows);
  })
  .catch( err =>{
    console.log( 'error in name GET route', err);
    res.sendStatus(500)
  })
})//end bin GET

//router to get all closets and bins except the one the user is viewing
router.get('/select/:id', (req, res) => {
  console.log('Closetbin select GET:',req.params);
  const query = `SELECT * FROM closet_bin WHERE user_id = $1 EXCEPT SELECT * FROM closet_bin WHERE id = $2`;
  const values = [req.user.id, req.params.id]
  pool.query(query, values)
  .then( results =>{
    res.send( results.rows);
  })
  .catch( err =>{
    console.log( 'error in select GET route', err);
    res.sendStatus(500)
  })
})//end select GET

//----PostRoutes----//
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
})// end add closet or bin POST

//----PutRoutes----//
// PUT Route to update name for a closet or bin
router.put('/:id', (req, res) => {
  console.log('Closetbin PUT:',req.params);
  const queryString = `UPDATE closet_bin SET name='Imelda' WHERE id = $1`;
  const values = [req.params];
  pool.query(queryString, values)
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('Error in Closet.router POST route', err);
    res.sendStatus(500);
  });
}) // end update closet bin name PUT Route

module.exports = router;
