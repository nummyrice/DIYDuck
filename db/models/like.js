'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    answerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
    Like.belongsTo(models.Answer, {
      as: 'answer',
      foreignKey: "answerId",
    });
    Like.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    })
  };
  return Like;
};
