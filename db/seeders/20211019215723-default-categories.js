'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Categories', [{
     name: 'Art',
     createdAt: new Date(),
     updatedAt: new Date(),
   }, {
    name: 'Furnishing',
    createdAt: new Date(),
    updatedAt: new Date(),

  }, {
    name: 'Cooking',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Fashion',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Digital',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Family',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Kids',
    createdAt: new Date(),
    updatedAt: new Date(),
  },  {
    name: 'Pets',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Restoration',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Seasonal',
    createdAt: new Date(),
    updatedAt: new Date(),
  },], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Categories', null, {});
  }
};
