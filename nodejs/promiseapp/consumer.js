// import the class module

const Service = require('./externalservicemodule');

let serv = new Service();

// define the external service metadata
const options = {
    host: 'apiapptrainingnewapp.azurewebsites.net',
    path: '/api/Products',
    method:'GET'
};
// call method from the class
serv.getData(options).then((receivedData)=>{
    console.log(`Received Data = ${receivedData}`);
}).catch((error)=>{
    console.log(`COmmunication Error ${error}`);
});

// further other logic

for(let i=0;i<10;i++){
    console.log(`SOme Other Operation ${i}`);
}