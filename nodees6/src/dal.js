import * as Sequelize from 'sequelize';
import Department from './../models/Department.js';
import {db} from './dbconfig.js';
export class DataAccess {
 constructor(){
     this.sequelize =db;
    // this.deptModel = new Department(this.sequelize,Sequelize.DataTypes);
 }

 async getData(req,resp){
    //  await this.sequelize.sync({force:false});

    //  let departments =   await this.deptModel.findAll();

    //  return resp.status(200).send({message: 'Data Received Successfully', data:departments}); 
 }
 async getDataq(){
    // await this.sequelize.sync({force:false});

    // let departments =   await this.deptModel.findAll();
    
    // return departments; 
}
}

let obj = new DataAccess();
let data = obj.getDataq();

console.log(`Data = ${data}`);