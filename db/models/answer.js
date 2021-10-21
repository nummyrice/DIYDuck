'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    answer: {
      type: DataTypes.TEXT(2000),
      allowNull: false,
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
    Answer.belongsTo(models.Question, {
      as: 'question',
      foreignKey: 'questionId',
    });
    Answer.hasMany(models.Like, {
      as:'likes',
      foreignKey: 'answerId',
      onDelete: 'CASCADE',
      hooks: true
    }),
    Answer.hasMany(models.Comment, {
      as: 'comments',
      foreignKey: 'answerId',
      onDelete: 'CASCADE',
      hooks: true,
    })
    Answer.belongsTo(models.User, {
      // as: 'user',
      foreignKey: 'userId'
    })
  };
  return Answer;
};
