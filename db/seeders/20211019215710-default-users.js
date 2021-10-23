'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [{
     name: 'Rich',
     email: 'happy@happy.com',
     hashedPassword: 'Example1!',
     biography: 'Hello, this is Rich',
     profilePhoto: 'https://cdn.discordapp.com/attachments/889944469359718421/900129385720479744/whiteDuck.png',
     profession: 'Business',
     createdAt: new Date(),
     updatedAt: new Date(),
   }, {
    name: 'PrincessPeach',
    email: 'toadstool@kingdom.com',
    hashedPassword: 'Example2!',
    biography: 'Hello, this is Peach',
    profilePhoto: 'https://cdn.discordapp.com/attachments/889944469359718421/900129385720479744/whiteDuck.png',
    profession: 'Princess',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'Jerry',
    email: 'jerry@springer.com',
    hashedPassword: 'Example3!',
    biography: 'Hello, this is Jerry',
    profilePhoto: 'https://cdn.discordapp.com/attachments/889944469359718421/900129385720479744/whiteDuck.png',
    profession: 'Gardener',
    createdAt: new Date(),
    updatedAt: new Date(),
  },{
    name: 'Demo',
    email: 'demo@gmail.com',
    hashedPassword: '$2a$10$NuMVP6tiMiJaPVpdFxo21ezyU9L3dfDKClHNBhYRs9J7wE1nKP8Z2',
    biography: 'Hello, this is Demo User',
    profilePhoto: 'https://cdn.discordapp.com/attachments/889944469359718421/900129385720479744/whiteDuck.png',
    profession: 'Testing Apps',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
