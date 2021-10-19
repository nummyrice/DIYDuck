'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    biography: {
      type: DataTypes.TEXT
    },
    profilePhoto: DataTypes.STRING,
    profession: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Question, {
      as: 'questions',
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      hooks: true
    });
    User.hasMany(models.Answer, {
      as: 'answers',
      foreginKey: 'userId',
      onDelete: 'CASCADE',
      hooks: true
    });
    User.hasMany(models.Comment, {
      as: 'comments',
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      hooks: true
    });
    User.hasMany(models.Like, {
      as: 'likes',
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      hooks: true
    })
  };
  return User;
};
