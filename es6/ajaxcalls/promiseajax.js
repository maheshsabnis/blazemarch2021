function getData(){
    return new Promise((resolve,reject)=>{
            // this is async object
            let xhr = new XMLHttpRequest();
            // subscribe to the onload event to make sure that the success response will be received
            xhr.onload = function(){
                if(xhr.status === 200){
                    console.log(`Resolved ${xhr.response}`);
                    resolve(xhr.response);
                }
            };

            // subscribe to the onerror event to mzake sure that errors will be handled
            xhr.onerror = function(e){
               reject(`Error Occured ${e}`);
            };
            // define the request information using HTTP Method and URL
            xhr.open('GET', 'https://apiapptrainingnewapp.azurewebsites.net/api/Products');
            // send the request
            xhr.send();
    });
    
}


async function getProducts(){
    console.log('Method Start');
    let result = await getData();
    console.log(`After Awaitable call resule= ${result}`);
    console.log('Method End');
    return result;
}



function postData(prd){
    return new Promise((resolve,reject)=>{
            // this is async object
            let xhr = new XMLHttpRequest();
            // subscribe to the onload event to make sure that the success response will be received
            xhr.onload = function(){
                if(xhr.status === 200){
                    console.log(`Resolved ${xhr.response}`);
                    resolve(xhr.response);
                }
            };

            // subscribe to the onerror event to mzake sure that errors will be handled
            xhr.onerror = function(e){
               reject(`Error Occured ${e}`);
            };
            // define the request information using HTTP Method and URL
            xhr.open('POST', 'https://apiapptrainingnewapp.azurewebsites.net/api/Products');
            xhr.setRequestHeader("Content-Type", "application/json");
            // send the request
            xhr.send(JSON.stringify(prd));
    });
    
}

// PUT
//  xhr.open('PUT', 'https://apiapptrainingnewapp.azurewebsites.net/api/Products/{PRODUCTROWID}');

//    xhr.setRequestHeader("Content-Type", "application/json");
            // send the request
            //xhr.send(JSON.stringify(prd));

// DELETE
//  xhr.open('DELETE', 'https://apiapptrainingnewapp.azurewebsites.net/api/Products/{PRODUCTROWID}');