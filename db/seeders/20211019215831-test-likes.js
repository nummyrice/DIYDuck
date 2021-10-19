'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Likes', [{
     answerId: 1,
     userId: 2,
     createdAt: new Date(),
     updatedAt: new Date(),
   }, {
    answerId: 2,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Likes', null, {});
  }
};
