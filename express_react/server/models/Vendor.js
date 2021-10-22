const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Vendor', {
    VendowRowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VendorId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "VendorId"
    },
    VendorName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    VendorContactName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    VendorAddress: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    VendorEmailAddress: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    VendorContactNumber: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Vendor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "VendowRowId" },
        ]
      },
      {
        name: "VendorId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "VendorId" },
        ]
      },
    ]
  });
};
