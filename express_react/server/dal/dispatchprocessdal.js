const {Sequelize,DataTypes} = require('sequelize');
const path  = require('path');
let sequelize = new Sequelize("eComm", "root", "P@ssw0rd_", {
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5,
        idle:10000
    },
    define:{
          timestamps:false
    }
});
let dispatchProcessModel =  require(path.join(__dirname,'./../models/DispatchProcess'))(sequelize, Sequelize.DataTypes);

class DispatchProcessDal {
    
              
    getDispatchProcesses(req,resp){
         sequelize.sync({
            force:false  
        }).then(()=>
        dispatchProcessModel.findAll()  
        )
        .then((data)=>{
            return resp.status(200).send({
                rowCount:data.length,
                rows:data
            });
        }).catch((error)=>{
            return resp.status(500).send({
                message: `Some Error Occured ${error.message}`
            });
             
        });
    }
    getDispatchProcessesById(req,resp){
        let id =  req.params.id;
        sequelize.sync({
            force:false  
        }).then(()=>
        dispatchProcessModel.findAll()  
        .findOne({
            where: {CategoryRowId:id}   
        })
        )
        .then((data)=>{
            return resp.status(200).send({
                rowCount:data.length,
                rows:data
            });
            
        }).catch((error)=>{
            return resp.status(500).send({
                message: `Some Error Occured ${error.message}`
            });
        });
    }

    createDispatchProcess(req,resp){
        const dispatchToCreate = req.body;
        sequelize.sync({
            force:false  
        }).then(()=>{
            return dispatchProcessModel.create(dispatchToCreate);
        })
        .then((data)=>{
            return resp.status(200).send({
                message:'Record Inserted Successfully',
                rows:JSON.stringify(data)
            });
        }).catch((error)=>{
            resp.status(500).send({
                message: `Some Error Occured ${error.message}`
            });
            resp.end();
        });
    }
}

module.exports = DispatchProcessDal;