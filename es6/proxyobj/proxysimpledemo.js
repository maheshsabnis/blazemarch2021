let originalObject = {
    message: 'I am original Object'
};

class MyClass {
    constructor(){
        this.data='I am Property from class';
    }
}
// defing a handler
const handler = {};

// define a proxy

const proxy = new Proxy(originalObject,handler);
let obj = new MyClass();
const proxy1 = new Proxy(obj,handler);

// define a consumer function

function consumer(){
    // accessing the property from the target object
    // using proxy instance
    let message =proxy.message;
    console.log(`Message = ${message}`);
    let newmessage = proxy1.data; 
    console.log(`Ndew Message = ${newmessage}`);
}

consumer();