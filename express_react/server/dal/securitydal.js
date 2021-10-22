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
let userMasterModel =  require(path.join(__dirname,'./../models/UserMaster'))(sequelize, Sequelize.DataTypes);
let roleMasterModel =  require(path.join(__dirname,'./../models/RoleMaster'))(sequelize, Sequelize.DataTypes);
let usersInRoleModel =  require(path.join(__dirname,'./../models/UsersInRole'))(sequelize, Sequelize.DataTypes);
let userLoginInfoModel =  require(path.join(__dirname,'./../models/UserLoginInfo'))(sequelize, Sequelize.DataTypes);

class SecurityDal {        
    async getRoles(req,resp){
        try{
            await sequelize.sync({force:false});
            console.log(`The Role Master ${roleMasterModel}`);   
            let data = await roleMasterModel.findAll(); 
           
               if(data){
                   return resp.status(200).send({
                       rowCount:data.length,
                       rows:data});
               }
               return resp.status(500).send({
                   message: `Some Error Occured ${error.message}`
               });
        }catch(e){
            return resp.status(500).send({
                message: `Some Error Occured in catch ${e.message}`
            });
        }
                
    }
    
    async createUser(req,resp){
        let userToCreate = req.body;
        // conectn to DB using Sequelize
        await sequelize.sync({force:false});

        // check is the user exists
        const isUserExist = await userMasterModel.findOne({where:{UserName:userToCreate.UserName}});
        if(isUserExist !==null) // user alread exist i.e. conflict
            return resp.status(409).send({response: `${userMasterModel.UserName} use is already present`});
            
        
        // create user
        const created = await userMasterModel.create(userToCreate);    
        return resp.status(200).send({response: `${userToCreate.UserName} Created`});
    }

    async  createUserRole(req,resp){
        const userRoleToCreate = req.body;
        await sequelize.sync({
            force:false  
        }); 
        let data =  usersInRoleModel.create(userRoleToCreate);
    
        if (data){
            return resp.status(200).send({
                message:'Record Inserted Successfully',
                rows:JSON.stringify(data)
            });
        }
            resp.status(500).send({
                message: `Some Error Occured ${error.message}`
            });
    }

    async authUser(req,resp){
        // read data from body
        let user = req.body;
        console.log(JSON.stringify(user));
        // conectn to DB using Sequelize
        await sequelize.sync({force:false});
        // chck if the user exist
        
        const userToFind = await userMasterModel.findOne({where:{UserName:user.UserName}});
        console.log(`Searched User ${JSON.stringify(userToFind)}`);
        if(userToFind === null) // User not found
            return resp.status(404).send({response: `${user.UserName} not found`});
        
        // check the passwod for the user
        if(userToFind.Password.trim() !== user.Password.trim()) // unauthorized
            return resp.status(401).send({response: `Sorry the Pasword for ${user.UserName} is incorrect`});

        // get the role of the user
        const roleForUser = await usersInRoleModel.findOne({where:{UserName:user.UserName}});   
        if(roleForUser === null)
            return resp.status(404).send({response: `Role for the ${user.UserName} not found`});

        // create a log of the Login    
        const userLoginLog = await userLoginInfoModel.create({
            UserName:user.UserName,
            LoginDateTime: Date.now(),
            LogOutDateTime: Date.now()
        })
        if(userLoginLog === null){
            return resp.status(404).send({response: `Something has gone terriably wrong`});
        }

        // set the session information
         // authorize the user and set the session configuration for the user
         req.session.loggedin = true; // user is loggedin and the session context is configured
         req.session.name = user.UserName; // define the session data with its 'name' property    


        // respond the tokne to the client
        return resp.status(200).send({
            Response: `Login is success for ${user.UserName}`,
            UserName:user.UserName,
            AuthStatus:  true,
            Role:roleForUser.RoleName 
        });
    } 

    // method for logout
    async logout(req,resp){
        // the session context for the current auth user is removed from session store
        // hence the user cannot access any resources from the server 
        req.session.destroy(); 
        return resp.status(200).send({message: 'You are successfully logged out.'});
     }

}

module.exports = SecurityDal;



