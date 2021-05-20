const connection = require('./connection')

function getTails (db = connection) {
  return db('tail').select()
}

module.exports = {
  getTails
}
