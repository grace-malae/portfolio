const connection = require('./connection')

function getTails (db = connection) {
  return db('tails').select()
}

module.exports = {
  getTails
}
