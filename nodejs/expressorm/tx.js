 
const {Sequelize,DataTypes,Model} = require('sequelize');
const path  =require('path');
const sequelize = new Sequelize('Company', 'root', 'P@ssw0rd_',{
    host: 'localhost',
    dialect:'mysql',
    pool: {
        min:0, 
        max:5,
        idle:10000 // 10 minuts of the idle time
    },
    define:{
        timestamps:false
    }
});


const deptModel = require(path.join(__dirname, './models/Department'))(sequelize,Sequelize.DataTypes);
const emplModel = require(path.join(__dirname, './models/Employee'))(sequelize,Sequelize.DataTypes);

async function txApp(){
const t = await sequelize.transaction();

try{
    const dept =   await deptModel.create({
        DeptNo:202,DeptName:'DEPT-202', Location:'Pune',Capacity:500
    }, {transaction:t});

    const emp = await emplModel.create({EmpNo:901,EmpName:'Kumar',Designation:'Lead',Salary:99898,DeptNo:202},{transaction:t});

    await t.commit();

}catch(ex){
    t.rollback();
    console.log(`Error In Transaction ${ex.message}`);
}}

txApp();