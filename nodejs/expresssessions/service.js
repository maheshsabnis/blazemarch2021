const express = require('express');
const cors = require('cors');
const session  =require('express-session');
const AuthLogic  =require('./dal/authinfra');



let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

// cofigure the session middleware in the express instance
instance.use(session({
    secret: 'xyzXY123321YXzyx',
    resave:false, // if the request is already enabled with session the please do not again take it to the session store
    saveUninitialized:true, // force the user to login
    cookie:{
        maxAge:3600000  // 1 HR
    } 
}));


let authLogic= new AuthLogic();

instance.post('/api/app/register', authLogic.registerUser);
instance.post('/api/app/auth', authLogic.authUser);
instance.get('/api/app/get', authLogic.getdata);
instance.post('/api/app/logout',authLogic.logout);

instance.listen(9002,()=>{
    console.log('Service Started at port 9002');
});
