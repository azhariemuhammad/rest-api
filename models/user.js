'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: {
      type : DataTypes.BOOLEAN,
      defaultValue : false
      }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, saltRounds).then(hash => {
      user.password = hash
    })
  })

  User.beforeUpdate((user, options) => {
    return bcrypt.hash(user.password, saltRounds).then(hash => {
      user.password = hash
    })
  })
  return User;
};
