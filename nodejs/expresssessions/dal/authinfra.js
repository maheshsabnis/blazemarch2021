const {Sequelize,DataTypes,Model} = require('sequelize');
const path  =require('path');
const jwt = require('jsonwebtoken');
const sequelize = new Sequelize('Company', 'root', 'P@ssw0rd_',{
    host: 'localhost',
    dialect:'mysql',
    pool: {
        min:0, 
        max:5,
        idle:10000 // 10 minuts of the idle time
    },
    define:{
        timestamps:false
    }
});


// defining the secreate for signing the token 
// Note: In Production use 'crypto()' package od Nodejs to create cryprographich key
// OR use any random string generator

const jwtSecreteSettings = {
    jwtSecret : 'mi16james007700semaj61m'
};

const deptModel = require(path.join(__dirname, './../../expressorm/models/Department'))(sequelize,Sequelize.DataTypes);

const userModel = require(path.join(__dirname, './../../expressorm/models/Users'))(sequelize,Sequelize.DataTypes);

class AuthLogic {
  // method to register user
  async registerUser(req,resp){
        const user = req.body; 
        await sequelize.sync({force:false});
        // check if the user already exists
        const find = await userModel.findOne({where:{UserName:user.UserName}});
        if(find !== null) 
            // returning conflict
            return resp.status(409).send({message: `User ${user.UserName} is already present`});
        // otherwise create user
        const created = await userModel.create(user);   
        return resp.status(201).send({message: `User ${user.UserName} is created sucessfully`, response:created}); 
  }

  // method to authenticate user and generate token
  async authUser(req,resp){
      let user = req.body;
      await sequelize.sync({force:false});
       // check if the user is exists
       const find = await userModel.findOne({where:{UserName:user.UserName}});  
       if(find === null) 
            return resp.status(404).send({message: `User ${user.UserName} is Not found so please register`});
       // please match the password
       if(find.Password.trim() !== user.Password.trim())   
             return resp.status(401).send({message: `The Password for User ${user.UserName} is not found`});
     
       // enable the Auth Request for the session 
       req.session.loggedin = true; // the user authenticatioj context is confogured to a request, this user will continue using this session till session is not destroyed

        // configure the user name with 'name' property of session this will ne  stored in session store in-memory (inside the memory of tyeh web server)
        req.session.name = user.UserName;

       // response as token
       return resp.status(200).send({
           response: `User ${user.UserName} is authenticated under a session context`
          
       });
  }

  // method to get data if the use is authenticated 
  async getdata(req,resp){
        // check if the request has the session name in it if yes then
        // provde the data else generate error / UnAuthorization error
        if(req.session.name  === undefined)
            return resp.status(401).send(
                {
                    message: `Session for User is expired please login`
                });

        await sequelize.sync({force:false});
        const data = await deptModel.findAll();
        return resp.status(200).send({response:data});   
        
     }
   
    async logout(req,resp){
        // destroy the session when the user is requesting the logout
        req.session.destroy();
        return resp.status(200).send({response: 'User has logged-out sucessfully'});
    }   
  }


module.exports = AuthLogic;