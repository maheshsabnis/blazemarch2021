const {Sequelize,DataTypes,Model} = require('sequelize');

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

// caling stored proc

async function listEmployees(){
    let result = await sequelize.query('CALL getEmployees("Manager")');
    return result;
}

listEmployees().then((result)=>{
    console.log(`Result = ${JSON.stringify(result)}`);
}).catch((e)=>{console.log(e)});


async function sp_insertdept(){
    let result = await sequelize.query('CALL sp_insertdept(903, "Dept-903", "Pune",900)');
    return result;
}

sp_insertdept().then((result)=>{
    console.log(`Result = ${JSON.stringify(result)}`);
}).catch((e)=>{console.log(e)});