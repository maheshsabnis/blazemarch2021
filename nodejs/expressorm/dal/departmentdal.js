const {Sequelize,DataTypes,Model, ValidationError} = require('sequelize');
const path  =require('path');
const sequelize = new Sequelize('Company', 'root', 'P@ssw0rd_',{
    host: 'localhost',
    dialect:'mysql',
    pool: {
        min:0, 
        max:5,
        idle:10000  
    },
    define:{
        timestamps:false
    }
});

const deptModel = require(path.join(__dirname, './../models/Department'))(sequelize,Sequelize.DataTypes);

class DeparmentDal {
    async getAllData(request,response){

        await sequelize.sync({force:false}); // connect to database
        let rows =  await deptModel.findAll(); // return the resolverd data
        if(rows){
            return response.status(200)
            .send({
                statusMessage: 'Data is Read Successfully',
                rowCount:rows.length,
                rows:rows
            });
        }
        return  response.status(500)
        .send({
            statusMessage: 'Error Occured',
            errorDetails: error.message
        });
    }

    async getAllDataById(request,response){
        let id = parseInt(request.params.id);
        await sequelize.sync({force:false}); // connect to database
        let row =  await deptModel.findOne({where:{DeptNo:id}}); // return the resolverd data
        if(row){
            return response.status(200)
            .send({
                statusMessage: 'Data is Read Successfully',
                rows:row
            });
        }
        return  response.status(500)
        .send({
            statusMessage: 'Error Occured',
            errorDetails: error.message
        });
    }

    async createRecord(request,response){
        const objectToCreate = request.body;

        await sequelize.sync({force:false});
        
        let record =  await deptModel.create(objectToCreate)
        if(record){
            return response .status(200)
                .send({
                    statusMessage: 'Record Added Successfully',
                    record:record
                });
        }
       
            return response.status(500)
            .send({
                statusMessage: 'Error Occured',
                errorDetails: error.message
            });
      
    }
}

module.exports = DeparmentDal;