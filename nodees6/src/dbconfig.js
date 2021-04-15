import * as Sequelize from 'sequelize';

export const db =  new Sequelize.Sequelize("Company", "root", "P@ssw0rd_",{
    host:'localhost',
    dialect: 'mysql',
    pool:{
       max:5,
       min:0,
       idle:10000
   },
   define: { // Model mapping policies
       timestamps:false // supress the concurrency for insert update and delete
   }
});