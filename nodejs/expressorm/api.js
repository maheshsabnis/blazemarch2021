const express = require('express');
const cors = require('cors');
const path  =require('path');

// load sequelize object model

const {Sequelize,DataTypes,Model} = require('sequelize');

let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());


// define a sequelize infrastructure object to connect to the Database

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

// connect the current modue (code in the current file to use the Department Model)
// retriving an instance of the exported Department Model from Department.js by passing the 
// Sequelize object definition (sequelize) and the DataTypes (Sequelize.DataTypes)
// DataTypes are required for Data Validations and the COnstraints check 
const deptModel = require(path.join(__dirname, './models/Department'))(sequelize,Sequelize.DataTypes);

// defining REST APIs
instance.get('/api/departments',(req,resp)=>{
    sequelize.sync({force:false})
            .then(()=> 
                 deptModel.findAll()) // process read operation
            .then((data)=>{
                // 'data' is the recordSet
                resp.status(200)
                    .send({
                        statusMessage: 'Data is Read Successfully',
                        rowCount:data.length,
                        rows:data
                    });
            })
            .catch((error)=>{
                resp.status(500)
                .send({
                    statusMessage: 'Error Occured',
                    errorDetails: error.message
                });
            });
});
instance.get('/api/departments/:id',(req,resp)=>{
    let id = parseInt(req.params.id);
    sequelize.sync({force:false})
            .then(()=> 
                 deptModel.findOne({where:
                        {DeptNo:id}
                    })) // process read operation
            .then((data)=>{
                // 'data' is the recordSet
                resp.status(200)
                    .send({
                        statusMessage: 'Data is Read Successfully',
                        rowCount:data.length,
                        rows:data
                    });
            })
            .catch((error)=>{
                resp.status(500)
                .send({
                    statusMessage: 'Error Occured',
                    ErrorDetails: error.message
                });
            });
});
instance.post('/api/departments',(req,resp)=>{
    const objectToCreate = req.body;

    sequelize.sync({force:false})
    .then(()=> {
        return deptModel.create(objectToCreate)
    })  
    .then((data)=>{
        resp.status(200)
            .send({
                statusMessage: 'Record Added Successfully',
                record:data
            });
    })
    .catch((error)=>{
        resp.status(500)
        .send({
            statusMessage: 'Error Occured',
            errorDetails: error.message
        });
    });


});
instance.put('/api/departments/:id',(req,resp)=>{
    let id  =parseInt(req.params.id);

    const objectToUpdate = req.body;

    sequelize.sync({force:false})
    .then(()=> 
        deptModel.update({
            DeptName:objectToUpdate.DeptName,
            Location: objectToUpdate.Location,
            Capacity:objectToUpdate.Capacity 
        }, {where: {DeptNo:id}})
    )  
    .then((data)=>{
        resp.status(200)
            .send({
                statusMessage: 'Record Updated Successfully',
                record:data
            });
    })
    .catch((error)=>{
        resp.status(500)
        .send({
            statusMessage: 'Error Occured',
            errorDetails: error.message
        });
    });


});
instance.delete('/api/departments/:id',(req,resp)=>{
    let id  =parseInt(req.params.id);


    sequelize.sync({force:false})
    .then(()=> 
         deptModel.destroy({where:
                {DeptNo:id}
            }))  
    .then((data)=>{
        // 'data' is the recordSet
        resp.status(200)
            .send({
                statusMessage: 'Data is Deleted Successfully'
            });
    })
    .catch((error)=>{
        resp.status(500)
        .send({
            statusMessage: 'Error Occured',
            ErrorDetails: error.message
        });
    });
});






instance.listen(9001,()=>{
    console.log('server started on port 9001');
});