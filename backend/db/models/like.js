'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    like: DataTypes.BOOLEAN
  }, {});
  Like.associate = function(models) {
    // Like.belongsTo(models.User, { foreignKey: 'userId' });
    // Like.belongsTo(models.Song, { foreignKey: 'songId' });
  };
  return Like;
};