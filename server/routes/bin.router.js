const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();

//router that takes user id to fetch all closets and bins from the database
router.get('/', (req, res) => {
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

/**
 * FOR ADD BIN POST ROUTE SEE CLOSET.ROUTER
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
