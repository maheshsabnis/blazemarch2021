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
let subCategoryModel =  require(path.join(__dirname,'./../models/SubCategory'))(sequelize, Sequelize.DataTypes);

class SubCategoryDal {
    
              
    getSubCategories(req,resp){
         sequelize.sync({
            force:false  
        }).then(()=>
            subCategoryModel.findAll()  
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
    getSubCategorieById(req,resp){
        let id =  req.params.id;
        sequelize.sync({
            force:false  
        }).then(()=>
        subCategoryModel.findAll()  
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

    createSubCategory(req,resp){
        const subcategoryToCreate = req.body;
        sequelize.sync({
            force:false  
        }).then(()=>{
            return subCategoryModel.create(subcategoryToCreate);
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

module.exports = SubCategoryDal;



