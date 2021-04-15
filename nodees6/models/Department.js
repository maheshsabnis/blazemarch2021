import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Department extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    DeptNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DeptName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Location: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Department',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DeptNo" },
        ]
      },
    ]
  });
  return Department;
  }
}
