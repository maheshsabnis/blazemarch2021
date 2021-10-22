function getData(){
    console.log('initiating call');
    let products =[];
    // this is async object
    let xhr = new XMLHttpRequest();
    // subscribe to the onload event to make sure that the success response will be received
    xhr.onload = function(){
        if(xhr.status === 200){
            products = xhr.response;
            console.log(`Response received ${xhr.response}`);
        }
    };

    // subscribe to the onerror event to mzake sure that errors will be handled
    xhr.onerror = function(e){
        console.log(`Error Occured ${e}`);
    };
    // define the request information using HTTP Method and URL
    xhr.open('GET', 'https://apiapptrainingnewapp.azurewebsites.net/api/Products', false);
    // send the request
    xhr.send();
    console.log('getting response');
    return products;
}