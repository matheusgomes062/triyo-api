module.exports = (sequelize, DataTypes) =>
  sequelize.define('Dependent', {
    name: {
      type: DataTypes.STRING,
      unique: false
    },
    age: {
      type: DataTypes.STRING,
      unique: false
    },
    type: {
      type: DataTypes.STRING,
      unique: false
    }
  });
