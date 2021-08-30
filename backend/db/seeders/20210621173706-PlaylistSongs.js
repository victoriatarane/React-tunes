'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
    return queryInterface.bulkInsert('PlaylistSongs', [
      {
        playlistId: 1,
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playlistId: 1,
        songId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playlistId: 1,
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playlistId: 1,
        songId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playlistId: 1,
        songId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playlistId: 1,
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playlistId: 1,
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playlistId: 1,
        songId: 20,
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
    return queryInterface.bulkDelete('PlaylistSongs', null, {});
  }
};
