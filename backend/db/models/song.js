'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    songUrl: DataTypes.STRING,
    artistId: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    Song.belongsTo(models.Artist, { foreignKey: 'artistId' });
    Song.belongsToMany(models.User, { foreignKey: 'songId', through: 'Review', otherKey: 'userId'});
    Song.belongsToMany(models.User, { foreignKey: 'songId', through: 'Like', otherKey: 'userId'});
    Song.hasMany(models.Review, {foreignKey: 'songId'});
    Song.hasMany(models.Like, { foreignKey: 'songId' });
  };
  return Song;
};