class UserInfo {
    constructor(){
        this.FirstName = "Mahesh";
        this.LastName = "Sabnis";
        this.Email = "Sabnis_m@msit.com";
        this._UserSecret = "*****";
        this.Occupation = "Service";
    }
}
let obj = new UserInfo();

let proxy = new Proxy(obj,{
    get(target,prop){
        if(prop.startsWith('_')){
            throw new Error('Access Denied');
        } else {
            return Reflect.get(target,prop);
        }   
    },
    set(target,prop,value){
        if(prop.startsWith('_')){
            throw new Error('Access Denied');
        } else {
            return Reflect.set(target,prop,value);
        }   
    }
});

try {
    console.log(proxy.FirstName);
    console.log(proxy._UserSecret);
}catch(e){
    console.log(e.message);
}