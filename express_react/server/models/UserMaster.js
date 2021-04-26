const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserMaster', {
    UserName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    Password: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    EmailAddress: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "EmailAddress"
    }
  }, {
    sequelize,
    tableName: 'UserMaster',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserName" },
        ]
      },
      {
        name: "EmailAddress",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EmailAddress" },
        ]
      },
    ]
  });
};
