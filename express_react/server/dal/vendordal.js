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
let vendorModel =  require(path.join(__dirname,'./../models/Vendor'))(sequelize, Sequelize.DataTypes);

class VendorDal {
    
              
    getVendors(req,resp){

    // check if the session context is available for the current request
    if(req.session.name === undefined) {
        return resp.status(401).send({response: `Sorry, the session is expired, please login again`});
    }

         sequelize.sync({
            force:false  
        }).then(()=>
            vendorModel.findAll()  
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
    getVendorsById(req,resp){

    // check if the session context is available for the current request
    if(req.session.name === undefined) {
        return resp.status(401).send({response: `Sorry, the session is expired, please login again`});
    }

        let id =  req.params.id;
        sequelize.sync({
            force:false  
        }).then(()=>
            vendorModel.findAll()  
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

    createVendor(req,resp){


            // check if the session context is available for the current request
            if(req.session.name === undefined) {
                return resp.status(401).send({response: `Sorry, the session is expired, please login again`});
            }
        const vendorToCreate = req.body;
        sequelize.sync({
            force:false  
        }).then(()=>{
            return vendorModel.create(vendorToCreate);
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

module.exports = VendorDal;