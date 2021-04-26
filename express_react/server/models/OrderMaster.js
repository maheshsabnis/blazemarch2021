const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderMaster', {
    OrderId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerRowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'CustomerRowId'
      }
    },
    OrderDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    TotalAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ExpectedDeliveryDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ActualDeliveryDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OrderMaster',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OrderId" },
        ]
      },
      {
        name: "fk_Customer_row_id",
        using: "BTREE",
        fields: [
          { name: "CustomerRowId" },
        ]
      },
    ]
  });
};
