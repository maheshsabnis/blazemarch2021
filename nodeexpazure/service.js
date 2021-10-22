const express = require('express'); 
 
const cors = require('cors');
const path = require('path');
const  {Sequelize,DataTypes} = require('sequelize');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

let port  =  process.env.PORT || 6001;
app.set(port);
 
app.use(cors({
    origin:"*",  
    methods:"*",
    allowedHeaders:"*"
}));

// use the sequelize object to connect to database
// pass the parameters databse metadata e.g. DbName, UserName and Password
// pass the options as database metadata
const sequelize = new Sequelize("Company", "MaheshAdmin", "P$ssw0rd_", {
    host: 'mysqldbinstance.ctetf2m707cu.ap-south-1.rds.amazonaws.com', // the name of the server
    dialect: 'mysql', // the database provider
    port:3306,
    dialectOptions:{
        ssl: 'Amazon RDS'
    },
    pool:{
        max:5,
        min:0,
        idle:10000
    },
    define: { // Model mapping policies
        timestamps:false // supress the concurrency for insert update and delete
    }
});
   
// map the departments object with sequelize object ansd its datatypes
const deptModel = require(path.join(__dirname,'./models/department'))(sequelize, Sequelize.DataTypes);

const empModel = require(path.join(__dirname,'./models/employee'))(sequelize, Sequelize.DataTypes);

app.get('/api/departments',(req,resp)=>{
    console.log(`Status of Sequelize ${sequelize}`);
    // subscribe to the sequelize instance
    // sequelize.sync: connect to database based on its metadata and do not create
    // table (or overwrite it)
    // sync() returns Promise<any>, tagt why the 'then()' method
    // can be used to use the mapped model (deptModel) to query using Sequelize
    // the '.then()' returns Promise<any> which is the records read from table
    // that must be subscribe by '.then()' again to read the data. THis '.then()'
    // retuens Promise<void> which can be directly used to extract data from 
    // promise object 
    sequelize.sync({
        force:false // please do not overwrite tables
    }).then(()=>
        deptModel.findAll()  // select all records from the Departments table
    )
    .then((data)=>{
        resp.status(200).send({
            rowCount:data.length,
            rows:data
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});

app.get('/api/departments/:id',(req,resp)=>{
    let id =  req.params.id;
    sequelize.sync({
        force:false  
    }).then(()=>
        deptModel.findOne({
            where: {DeptNo:id}  // the where condition
        })
    )
    .then((data)=>{
        resp.status(200).send({
            rowCount:data.length,
            rows:data
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});


app.post('/api/departments',(req,resp)=>{
    const deptToCreate = req.body;
    sequelize.sync({
        force:false  
    }).then(()=>{
        return deptModel.create(deptToCreate);
    })
    .then((data)=>{
        resp.status(200).send({
            message:'Record Inserted Successfully',
            rows:JSON.stringify(data)
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});


app.put('/api/departments/:id',(req,resp)=>{
    const dept = req.body;
    const id = req.params.id;
    sequelize.sync({
        force:false  
    }).then(()=>
       deptModel.update({
           DeptName: dept.DeptName,
           Location:dept.Location,
           Capacity:dept.Capacity
       }, {where:{DeptNo:id}})
    )
    .then((data)=>{
        resp.status(200).send({
            message:'Record Inserted Successfully',
            rows:JSON.stringify(data)
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});

app.delete('/api/departments/:id',(req,resp)=>{
    let id =  req.params.id;
    sequelize.sync({
        force:false  
    }).then(()=>
        deptModel.destroy({
            where: {DeptNo:id}  // the where condition
        })
    )
    .then((data)=>{
        resp.status(200).send({
            message:"Record Deleted Successfully",
            rows:data
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});

app.get('/api/employees',(req,resp)=>{
     
    sequelize.sync({
        force:false  
    }).then(()=>
        empModel.findAll()   
    )
    .then((data)=>{
        resp.status(200).send({
            rowCount:data.length,
            rows:data
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});

app.get('/api/employees/:id',(req,resp)=>{
    let id =  req.params.id;
    sequelize.sync({
        force:false  
    }).then(()=>
        empModel.findOne({
            where: {DeptNo:id}  // the where condition
        })
    )
    .then((data)=>{
        resp.status(200).send({
            rowCount:data.length,
            rows:data
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});


app.post('/api/employees',(req,resp)=>{
    const empToCreate = req.body;
    sequelize.sync({
        force:false  
    }).then(()=>{
        return empModel.create(empToCreate);
    })
    .then((data)=>{
        resp.status(200).send({
            message:'Record Inserted Successfully',
            rows:JSON.stringify(data)
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});

app.put('/api/employees/:id',(req,resp)=>{
    const emp = req.body;
    const id = req.params.id;
    sequelize.sync({
        force:false  
    }).then(()=>
       empModel.update({
           EmpName: emp.EmpName,
           Designation:emp.Designation,
           Salary:emp.Salary,
           DeptNo:emp.DeptNo
       }, {where:{EmpNo:id}})
    )
    .then((data)=>{
        resp.status(200).send({
            message:'Record Inserted Successfully',
            rows:JSON.stringify(data)
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});

app.delete('/api/employees/:id',(req,resp)=>{
    let id =  req.params.id;
    sequelize.sync({
        force:false  
    }).then(()=>
        empModel.destroy({
            where: {EmpNo:id}  // the where condition
        })
    )
    .then((data)=>{
        resp.status(200).send({
            message:"Record Deleted Successfully",
            rows:data
        });
        resp.end();
    }).catch((error)=>{
        resp.status(500).send({
            message: `Some Error Occured ${error.message}`
        });
        resp.end();
    });
});

app.listen(port, ()=>{
    console.log('Started..');
});

app.on('error', onError);
app.on('listening', onListening);

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }
  
