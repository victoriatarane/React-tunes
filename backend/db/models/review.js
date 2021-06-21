'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    like: DataTypes.BOOLEAN
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Songs, { foreignKey: 'songId' });
  };
  return Review;
};