'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    artistName: DataTypes.STRING
  }, {});
  Artist.associate = function(models) {
    Artist.hasMany(models.Songs, { foreignKey: 'artistId' });
  };
  return Artist;
};