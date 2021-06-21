'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        songId: 5,
        review: "What a nice song! It reminds me of the day I started college!",
        likes: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        songId: 10,
        review: "I hate this song with my entire heart!",
        likes: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        songId: 20,
        review: "",
        likes: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        songId: 21,
        review: "Nice beat!",
        likes: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        songId: 7,
        review: "Yes!!! Love it!",
        likes: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        songId: 16,
        review: "Can't wait for his next album!",
        likes: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        songId: 33,
        review: "Does anyone understand the lyrics?",
        likes: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        songId: 20,
        review: "Good one!",
        likes: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        songId: 5,
        review: "I wish he knew how to sing...",
        likes: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
