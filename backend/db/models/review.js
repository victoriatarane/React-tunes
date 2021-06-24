'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    review: DataTypes.TEXT,
  }, {});
  Review.associate = function(models) {
    // Review.belongsToMany(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Song, { foreignKey: 'songId' });
  };
  return Review;
};