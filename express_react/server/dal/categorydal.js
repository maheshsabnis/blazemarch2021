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
let categoryModel =  require(path.join(__dirname,'./../models/Category'))(sequelize, Sequelize.DataTypes);

class CategoryDal {
    // getCategories(req,resp){
    //      sequelize.sync({
    //         force:false  
    //     }).then(()=>
    //          categoryModel.findAll()  
    //     )
    //     .then((data)=>{
    //         return resp.status(200).send({
    //             rowCount:data.length,
    //             rows:data
    //         });
    //     }).catch((error)=>{
    //         return resp.status(500).send({
    //             message: `Some Error Occured ${error.message}`
    //         });
             
    //     });
    // }

    async getCategories(req,resp){
        await sequelize.sync({
           force:false  
       });
       console.log(`Category Model ${categoryModel}`);
        let data= await    categoryModel.findAll() ; 
       
           if(data){ 
           return resp.status(200).send({
               rowCount:data.length,
               rows:data
           });}
       
           return resp.status(500).send({
               message: `Some Error Occured ${error.message}`
           });
            
      
   }
    getCategorieById(req,resp){
        let id =  req.params.id;
        sequelize.sync({
            force:false  
        }).then(()=>
           categoryModel.findOne({
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

    createCategory(req,resp){
        const categoryToCreate = req.body;
        sequelize.sync({
            force:false  
        }).then(()=>{
            return categoryModel.create(categoryToCreate);
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

module.exports = CategoryDal;



