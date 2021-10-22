const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    ProductRowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "ProductId"
    },
    ProductName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ProductPrice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProductDescription: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    SubCategoryRowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SubCategory',
        key: 'SubCategoryRowId'
      }
    },
    VendowRowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Vendor',
        key: 'VendowRowId'
      }
    },
    ManufacturerRowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Manufacturer',
        key: 'ManufacturerRowId'
      }
    }
  }, {
    sequelize,
    tableName: 'Product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductRowId" },
        ]
      },
      {
        name: "ProductId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
      {
        name: "fk_subcategory_row_id",
        using: "BTREE",
        fields: [
          { name: "SubCategoryRowId" },
        ]
      },
      {
        name: "fk_manufacturer_row_id",
        using: "BTREE",
        fields: [
          { name: "ManufacturerRowId" },
        ]
      },
      {
        name: "fk_vendor_row_id",
        using: "BTREE",
        fields: [
          { name: "VendowRowId" },
        ]
      },
    ]
  });
};
