const {Sequelize,DataTypes,Model} = require('sequelize');
const path = require('path');
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


const empModel = require(path.join(__dirname, './models/Employee'))(sequelize,Sequelize.DataTypes);

async function Transaction(){
    let tx = await sequelize.transaction();
    try {
        let dept = await deptModel.create({
            DeptNo:1002,DeptName:'Dept_1002', Location: 'Pune', Capacity:200
        },{transaction:tx} ); // informing the current operation about its transaction scope

        let emp = await empModel.create({
            EmpNo:9001,EmpName:'Kumar', Designation:'Lead',Salary:787, DeptNo:20
        },{transaction:tx} ); // informing the current operation about its transaction scope

        // commit transaction
        await tx.commit();

    }catch(ex){
        // rollback trancation
        tx.rollback();
        console.log(`Error in Transaction ${ex.message}`);
    }
}

Transaction().then((r)=>{
    console.log(`Done Dona Done ${r}`);
}).catch((e)=>{console.log(e)});