const express = require('express')

const db = require('../db/tails')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTails()
    .then(results => {
      res.json({ tails: results.map(tails => tails.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
