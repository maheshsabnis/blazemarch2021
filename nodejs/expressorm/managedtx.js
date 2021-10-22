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

// Managed Transactions will be commited if all transaction operations isn scope are executed suffessfully else the transaction will be rolledback
async function Transaction(){
    try {
    let tx = await sequelize.transaction(async (t)=>{ // t is scope


        let dept = await deptModel.create({
            DeptNo:1003,DeptName:'Dept_1003', Location: 'Pune', Capacity:200
        },{transaction:t} ); // informing the current operation about its transaction scope

        let emp = await empModel.create({
            EmpNo:9002,EmpName:'Kumar G', Designation:'Manager',Salary:787, DeptNo:20
        },{transaction:t} ); // informing the current operation about its transaction scope
});
       

    }catch(ex){
       
        console.log(`Error in Transaction ${ex.message}`);
    }
}

Transaction().then((r)=>{
    console.log(`Done Dona Done ${r}`);
}).catch((e)=>{console.log(e)});