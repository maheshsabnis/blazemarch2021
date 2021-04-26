var DataTypes = require("sequelize").DataTypes;
var _Category = require("./Category");
var _Customer = require("./Customer");
var _DispatchProcess = require("./DispatchProcess");
var _Manufacturer = require("./Manufacturer");
var _OrderMaster = require("./OrderMaster");
var _OrderMasterItemDetails = require("./OrderMasterItemDetails");
var _Product = require("./Product");
var _RoleMaster = require("./RoleMaster");
var _SubCategory = require("./SubCategory");
var _UserLoginInfo = require("./UserLoginInfo");
var _UserMaster = require("./UserMaster");
var _UsersInRole = require("./UsersInRole");
var _Vendor = require("./Vendor");

function initModels(sequelize) {
  var Category = _Category(sequelize, DataTypes);
  var Customer = _Customer(sequelize, DataTypes);
  var DispatchProcess = _DispatchProcess(sequelize, DataTypes);
  var Manufacturer = _Manufacturer(sequelize, DataTypes);
  var OrderMaster = _OrderMaster(sequelize, DataTypes);
  var OrderMasterItemDetails = _OrderMasterItemDetails(sequelize, DataTypes);
  var Product = _Product(sequelize, DataTypes);
  var RoleMaster = _RoleMaster(sequelize, DataTypes);
  var SubCategory = _SubCategory(sequelize, DataTypes);
  var UserLoginInfo = _UserLoginInfo(sequelize, DataTypes);
  var UserMaster = _UserMaster(sequelize, DataTypes);
  var UsersInRole = _UsersInRole(sequelize, DataTypes);
  var Vendor = _Vendor(sequelize, DataTypes);

  SubCategory.belongsTo(Category, { as: "CategoryRow", foreignKey: "CategoryRowId"});
  Category.hasMany(SubCategory, { as: "SubCategories", foreignKey: "CategoryRowId"});
  OrderMaster.belongsTo(Customer, { as: "CustomerRow", foreignKey: "CustomerRowId"});
  Customer.hasMany(OrderMaster, { as: "OrderMasters", foreignKey: "CustomerRowId"});
  Product.belongsTo(Manufacturer, { as: "ManufacturerRow", foreignKey: "ManufacturerRowId"});
  Manufacturer.hasMany(Product, { as: "Products", foreignKey: "ManufacturerRowId"});
  DispatchProcess.belongsTo(OrderMaster, { as: "Order", foreignKey: "OrderId"});
  OrderMaster.hasMany(DispatchProcess, { as: "DispatchProcesses", foreignKey: "OrderId"});
  OrderMasterItemDetails.belongsTo(OrderMaster, { as: "Order", foreignKey: "OrderId"});
  OrderMaster.hasMany(OrderMasterItemDetails, { as: "OrderMasterItemDetails", foreignKey: "OrderId"});
  OrderMasterItemDetails.belongsTo(Product, { as: "ProductRow", foreignKey: "ProductRowId"});
  Product.hasMany(OrderMasterItemDetails, { as: "OrderMasterItemDetails", foreignKey: "ProductRowId"});
  Product.belongsTo(SubCategory, { as: "SubCategoryRow", foreignKey: "SubCategoryRowId"});
  SubCategory.hasMany(Product, { as: "Products", foreignKey: "SubCategoryRowId"});
  Product.belongsTo(Vendor, { as: "VendowRow", foreignKey: "VendowRowId"});
  Vendor.hasMany(Product, { as: "Products", foreignKey: "VendowRowId"});

  return {
    Category,
    Customer,
    DispatchProcess,
    Manufacturer,
    OrderMaster,
    OrderMasterItemDetails,
    Product,
    RoleMaster,
    SubCategory,
    UserLoginInfo,
    UserMaster,
    UsersInRole,
    Vendor,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
