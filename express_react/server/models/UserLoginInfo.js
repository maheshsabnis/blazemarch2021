const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserLoginInfo', {
    LoginCountId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    LoginDateTime: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    LogOutDateTime: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'UserLoginInfo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LoginCountId" },
        ]
      },
    ]
  });
};
