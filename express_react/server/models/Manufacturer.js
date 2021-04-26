const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Manufacturer', {
    ManufacturerRowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ManufacturerId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "ManufacturerId"
    },
    ManufacturerName: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Manufacturer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ManufacturerRowId" },
        ]
      },
      {
        name: "ManufacturerId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ManufacturerId" },
        ]
      },
    ]
  });
};
