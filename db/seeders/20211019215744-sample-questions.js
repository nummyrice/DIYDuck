'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Questions', [{
     title: 'What is my name?',
     content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
     userId: 1,
     categoryId: null,
     createdAt: new Date(),
    updatedAt: new Date(),
   }, {
    title: 'Why do we use it?',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like. ',
    userId: 1,
    categoryId: 1,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: 4,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'Where does it come from?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: 2,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: 2,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 2,
    categoryId: 2,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 2,
    categoryId: null,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 2,
    categoryId: null,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 2,
    categoryId: null,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 2,
    categoryId: null,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 2,
    categoryId: null,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 2,
    categoryId: null,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 2,
    categoryId: 5,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 2,
    categoryId: 5,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: 5,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: 5,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: 4,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: 4,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: 4,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: 4,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: 6,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: 6,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: 6,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 2,
    categoryId: null,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 2,
    categoryId: null,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 2,
    categoryId: null,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 2,
    categoryId: null,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: null,
    createdAt: new Date(),
   updatedAt: new Date(),
  }, {
    title: 'What is my name?',
    content: 'e a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ',
    userId: 1,
    categoryId: null,
    createdAt: new Date(),
   updatedAt: new Date(),
  }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Questions', null, {});
  }
};
