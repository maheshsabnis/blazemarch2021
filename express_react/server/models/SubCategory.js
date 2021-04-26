const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SubCategory', {
    SubCategoryRowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SubCategoryId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "SubCategoryId"
    },
    SubCategoryName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CategoryRowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'CategoryRowId'
      }
    }
  }, {
    sequelize,
    tableName: 'SubCategory',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SubCategoryRowId" },
        ]
      },
      {
        name: "SubCategoryId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SubCategoryId" },
        ]
      },
      {
        name: "fk_category_row_id",
        using: "BTREE",
        fields: [
          { name: "CategoryRowId" },
        ]
      },
    ]
  });
};
