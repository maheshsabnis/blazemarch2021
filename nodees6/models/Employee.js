import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Employee extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    EmpNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmpName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Designation: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DeptNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Department',
        key: 'DeptNo'
      }
    }
  }, {
    sequelize,
    tableName: 'Employee',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EmpNo" },
        ]
      },
      {
        name: "FK_DEPTNO",
        using: "BTREE",
        fields: [
          { name: "DeptNo" },
        ]
      },
    ]
  });
  return Employee;
  }
}
