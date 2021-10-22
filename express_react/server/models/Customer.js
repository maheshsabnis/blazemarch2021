const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customer', {
    CustomerRowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "CustomerId"
    },
    CustomerName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    CustomerAddress: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    CustomerCity: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CustomerEmail: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    CustomerContactNo: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Customer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CustomerRowId" },
        ]
      },
      {
        name: "CustomerId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CustomerId" },
        ]
      },
    ]
  });
};
