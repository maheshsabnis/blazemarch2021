const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DispatchProcess', {
    DispatchRowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'OrderMaster',
        key: 'OrderId'
      }
    },
    DispatchedDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DelivaryAgentName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    AgentContactNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ActualDeliveryDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DispatchStatus: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'DispatchProcess',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DispatchRowId" },
        ]
      },
      {
        name: "fk_order_id1",
        using: "BTREE",
        fields: [
          { name: "OrderId" },
        ]
      },
    ]
  });
};
