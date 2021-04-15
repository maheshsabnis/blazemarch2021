import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Department from  "./Department.js";
import _Employee from  "./Employee.js";

export default function initModels(sequelize) {
  var Department = _Department.init(sequelize, DataTypes);
  var Employee = _Employee.init(sequelize, DataTypes);

  Employee.belongsTo(Department, { as: "DeptNo_Department", foreignKey: "DeptNo"});
  Department.hasMany(Employee, { as: "Employees", foreignKey: "DeptNo"});

  return {
    Department,
    Employee,
  };
}
