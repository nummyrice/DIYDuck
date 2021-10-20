'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Answer, {
      as: "answer",
      foreignKey: "answerId",
    });
    Comment.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
    });
  };
  return Comment;
};
