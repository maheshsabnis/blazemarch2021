const http = require('http');

let products = [];
// reading data
function getData(){
    http.request({
        host: 'apiapptrainingnewapp.azurewebsites.net',
        path: '/api/Products',
        method:'GET'
    }, (result)=>{
        // setvthe Processing Encoding for the result
        result.setEncoding('utf-8');
        result.on('data', (data)=>{
            products = JSON.parse(data);

            products.forEach((p,i)=>{
                console.log(JSON.stringify(p));
            });
        });
    }).end();
}

getData();
 
    let postRequest = http.request({
        host: 'apiapptrainingnewapp.azurewebsites.net',
        path: '/api/Products',
        method: 'POST',
        headers:{
            "Content-Type":'application/json'
        }
    }, (request)=>{
        request.on('data', (data)=>{
            console.log('posteding data');
        });
    });
// write the data in the post request

let productData = {
    'ProductId' :"Prd-002",
    'ProductName' :"Desktop",
    'CategoryName' :"Electronics",
    'Manufacturer' :"IBM",
    'Description' :"Server",
    'BasePrice' :127460
}

postRequest.write(JSON.stringify(productData));
// end the request
postRequest.end(); 
// look for any communcation error
postRequest.on('error',(err)=>{
    console.log(`Error in Post Operation ${err}`);
});

