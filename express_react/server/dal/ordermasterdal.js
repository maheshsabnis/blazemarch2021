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
let orderMasterModel =  require(path.join(__dirname,'./../models/OrderMaster'))(sequelize, Sequelize.DataTypes);

class OrderMasterDal {
    
              
    getOrders(req,resp){
         sequelize.sync({
            force:false  
        }).then(()=>
        orderMasterModel.findAll()  
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
    getOrderById(req,resp){
        let id =  req.params.id;
        sequelize.sync({
            force:false  
        }).then(()=>
        orderMasterModel.findAll()  
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

    createOrder(req,resp){
        const orderToCreate = req.body;
        sequelize.sync({
            force:false  
        }).then(()=>{
            return orderMasterModel.create(orderToCreate);
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

module.exports = OrderMasterDal;