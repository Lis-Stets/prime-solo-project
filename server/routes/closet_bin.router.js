const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

//router that takes user id to fetch all closets and bins from the database
router.get('/:id', rejectUnauthenticated, (req, res) => {
  const query = `SELECT * FROM closet_bin WHERE user_id = 4`;
  const values = [req.params.id]
  pool.query(query, values)
  .then( results =>{
    res.send( results.rows);
  })
  .catch( err =>{
    console.log( 'error in closets/bins GET route', err);
    res.sendStatus(500)
  })
})//end genres GET

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
