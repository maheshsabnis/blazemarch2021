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

async function getDepartments(){
    let depts = await sequelize.query('SELECT * FROM Department');
    return depts;
}

// calling the function
getDepartments().then((rowSet)=>{
    console.log(`Depertments = ${JSON.stringify(rowSet)}`);
}).catch((e)=>{
    console.log(`Error ${e}`);
});

async function createDepartments(){
    let depts = await sequelize.query('Insert into Department values(901, "Dept-901", "Pune",90)');
    return depts;
}

// calling the function
createDepartments().then((rowSet)=>{
    console.log(`Depertments = ${JSON.stringify(rowSet)}`);
}).catch((e)=>{
    console.log(`Error ${e}`);
});


const deptModel = require(path.join(__dirname, './models/Department'))(sequelize,Sequelize.DataTypes);


// explicit model mapping knows that wich table to map with the concistency of Column Names and 0=its constraints
async function createDepartmentsWithModelMapping(){
    let depts = await sequelize.query('Insert into Department values(902, "Dept-902", "Pune",90)',{
        mapToModel:true,
        model:deptModel
    });
    return depts;
}

// calling the function
createDepartmentsWithModelMapping().then((rowSet)=>{
    console.log(`Depertments = ${JSON.stringify(rowSet)}`);
}).catch((e)=>{
    console.log(`Error ${e}`);
});