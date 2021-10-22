const express = require('express');
const cors = require('cors');

const AuthLogic  =require('./dal/authinfra');



let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let authLogic= new AuthLogic();

instance.post('/api/app/register', authLogic.registerUser);
instance.post('/api/app/auth', authLogic.authUser);
instance.get('/api/app/get', authLogic.getdata)

instance.listen(9002,()=>{
    console.log('Service Started at port 9002');
});
