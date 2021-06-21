'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    songUrl: DataTypes.STRING,
    artistId: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    Song.belongsTo(models.Artist, { foreignKey: 'artistId' });
    Song.hasMany(models.Reviews, { foreignKey: 'songId' });
  };
  return Song;
};