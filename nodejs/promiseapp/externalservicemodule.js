// load the q
const q = require('q');
const http = require('http');
 

class ExternalService {
    getData(options){
        // since the method access external server using http.request()
        // bundle it in Promise explicitely
        let defer = q.defer();
        let products;
        let request;
        if(!options){
            // reject the call immediately
            defer.reject('Server Information is Missting');
        } else {
             request = http.request(options, (result)=>{
               
                result.setEncoding('utf-8');
                result.on('data', (data)=>{
                    products = data;
                });
                result.on('end', ()=>{
                     try {
                         // success
                         defer.resolve(products);
                     }catch(ex){
                         // error
                         defer.reject(`Error Occured ${ex.message}`);
                     }
                });
            });
        }
        // complet the request
        request.end();
        // return the promise
        return defer.promise;
    }
}

module.exports = ExternalService;