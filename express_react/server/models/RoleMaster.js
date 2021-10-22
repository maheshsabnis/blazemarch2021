const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoleMaster', {
    RoleName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    RoleDescription: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'RoleMaster',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RoleName" },
        ]
      },
    ]
  });
};
