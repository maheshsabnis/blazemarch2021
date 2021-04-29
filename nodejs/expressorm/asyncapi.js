const express = require('express');
const cors = require('cors');
const DeparmentDal = require('./dal/departmentdal');


let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let deptDal = new DeparmentDal();
 
instance.get('/api/departments', deptDal.getAllData);
instance.get('/api/departments/:id', deptDal.getAllDataById);
instance.post('/api/departments', deptDal.createRecord);
 
instance.listen(9001,()=>{
    console.log('server started on port 9001');
});