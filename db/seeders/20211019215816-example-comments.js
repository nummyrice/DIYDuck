'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Comments', [{
     comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
     answerId: 1,
     userId: 3,
     createdAt: new Date(),
    updatedAt: new Date(),
   }, {
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 1,
    userId: 3,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 2,
    userId: 3,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 2,
    userId: 3,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 3,
    userId: 3,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 3,
    userId: 2,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 4,
    userId: 2,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 4,
    userId: 2,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 5,
    userId: 2,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 5,
    userId: 2,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 6,
    userId: 2,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 6,
    userId: 2,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 7,
    userId: 2,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 7,
    userId: 2,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 8,
    userId: 2,
    createdAt: new Date(),
   updatedAt: new Date(),
  },{
    comment: 'Praesent justo felis, commodo nec laoreet a, viverra quis turpis. Nunc quis consequat orci. Nulla.',
    answerId: 8,
    userId: 2,
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
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
