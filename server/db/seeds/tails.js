exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tails').del()
    .then(function () {
      // Inserts seed entries
      return knex('tails').insert([
        { id: 1, name: 'tail 1' },
        { id: 2, name: 'tail 2' },
        { id: 3, name: 'tail 3' }
      ])
    })
}
