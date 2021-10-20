'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT(2000),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
    Question.hasMany(models.Answer, {
      as: 'answers',
      foreignKey: 'questionId',
      onDelete: 'CASCADE',
      hooks: true
    });
    Question.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'categoryId',
    })
  };
  return Question;
};
