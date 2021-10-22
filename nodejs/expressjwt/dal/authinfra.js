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
       
       // generate the token    
       // Parameter 1: payload, the user / role / any other cliam informartion, generate User and Role both are passed as payload object   
       // Parameter 2: the Secret Key
       // Parameter 3: the Other opetions e.g. Expiry Key
       const token = jwt.sign({user}, jwtSecreteSettings.jwtSecret, {
           expiresIn: 3600
       }); 

       // response as token
       return resp.status(200).send({
           response: `User ${user.UserName} is authenticated`,
           token:token
       });
  }

  // method to get data if the use is authenticated 
  async getdata(req,resp){
     // read the Auth Headers from the request
     // client send data as,
     // headers: {'AUTHORIZATION': `Bearer <TOKEN-VALUE>`}

     // verify if the request contains Auth header

     if(req.headers.authorization === undefined){
        return resp.status(401).send({response: `Authorization failed, the auth header is missing in request`});
     } else {
        // read the token and verify it
        let receivedtoken = req.headers.authorization.split(" ")[1];
        // decode the token to receive the claim (aka payload) to verify the authentication
        await jwt.verify(receivedtoken, jwtSecreteSettings.jwtSecret, async(err,decode)=>{
            if(err)
                return resp.status(401).send({response: `Authorization failed, ${err}`});
            // connect the current request context as Authorized request using decode
            req.decode = decode; 
            //  read data and return
            await sequelize.sync({force:false});
            const data = await deptModel.findAll();
            return resp.status(200).send({response:data});   
        });
        
     }
  }
}

module.exports = AuthLogic;