exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tail').del()
    .then(function () {
      // Inserts seed entries
      return knex('tail').insert([
        { id: 1, name: 'tail 1' },
        { id: 2, name: 'tail 2' },
        { id: 3, name: 'tail 3' }
      ])
    })
}
