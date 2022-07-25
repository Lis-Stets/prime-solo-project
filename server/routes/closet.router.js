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
})//end genres GET

/**
 * POST route template
 */
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
});

module.exports = router;
