module.exports = (sequelize, DataTypes) =>
  sequelize.define('Client', {
    name: {
      type: DataTypes.STRING,
      unique: false
    },
    address: {
      type: DataTypes.STRING,
      unique: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: false
    }
  });
