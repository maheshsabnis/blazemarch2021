class UserInfo {
    constructor(){
        this.FirstName = "Mahesh";
        this.LastName = "Sabnis";
        this.Email = "Sabnis_m@msit.com";
        this._UserSecret = "*****";
        this.Occupation = "Service";
    }
}
// settings the custom behavior on the targetobject
const handler = {
    get(target,prop) {
        // if property name starts with _ then throw error
        if(prop.startsWith('_')){
            throw new Error('Access is denied');
        }else {
            // read value of the property
            let value = target[prop];
            return value;
        }
    },
    set(target, prop,value) {
        if(prop === "Occupation"){
            throw new Error('Sorry this property can not ne written');
        } else {
            target[prop] = value;
            return true;
        }
    },
    ownKeys(target){
        let keys = Object.keys(target);

        let properties = keys.filter((p,i)=>{
            return p[0] !== '_';
        });
        return properties;
    },
    ownValues(target,prop){
       let values = target[prop];
       return values;
    }
};
const user = new UserInfo();
const userProxy = new Proxy(user,handler);




function GetUserInfo(){
     console.log(`User Info = ${userProxy.FirstName}
      ${userProxy.LastName} ${userProxy.Email} `);
     
      userProxy.FirstName = "Mahesh Kumar";
      userProxy.LastName = "Sabnis";
      

      console.log(`User Info = ${userProxy.FirstName}
      ${userProxy.LastName} ${userProxy.Email} `);
      userProxy.Occupation = "Self-Employeed";
      console.log(userProxy.Occupation);
} 


// read all propertis from the proxy
try {
    console.log(Object.keys(userProxy));
    console.log(Object.values(userProxy));
 
}catch(e) {
    console.log(e.message);
}


try{
    GetUserInfo();
}catch(e){
    console.log(e.message);
}
