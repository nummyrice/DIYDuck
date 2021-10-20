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
      as: 'questions',
      foreignKey: 'questionId',
    });
    Answer.hasMany(models.Like, {
      as:'likes',
      foreignKey: 'answerId',
      onDelete: 'CASCADE',
      hooks: true
    }),
    Answer.hasMany(models.comment, {
      as: 'comments',
      foreignKey: 'answerId',
      onDelete: 'CASCADE',
      hooks: true,
    })
  };
  return Answer;
};
