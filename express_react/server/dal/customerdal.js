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
let customerModel =  require(path.join(__dirname,'./../models/Customer'))(sequelize, Sequelize.DataTypes);

class CustomerDal {
    
              
    getCustomers(req,resp){

     

         sequelize.sync({
            force:false  
        }).then(()=>
        customerModel.findAll()  
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
    getCustomerById(req,resp){

    

        let id =  req.params.id;
        sequelize.sync({
            force:false  
        }).then(()=>
        customerModel.findAll()  
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

    createCustomer(req,resp){

    

        const customerToCreate = req.body;
        sequelize.sync({
            force:false  
        }).then(()=>{
            return customerModel.create(customerToCreate);
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

module.exports = CustomerDal;