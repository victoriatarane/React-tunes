'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    userId: DataTypes.INTEGER,
    playlistName: DataTypes.STRING
  }, {});
  Playlist.associate = function(models) {
    Playlist.belongsTo(models.User, { foreignKey: 'userId' });
    Playlist.hasMany(models.PlaylistSongs, { foreignKey: 'playlistId' })
  };
  return Playlist;
};