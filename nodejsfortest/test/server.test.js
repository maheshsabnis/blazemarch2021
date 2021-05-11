const expect = require('chai').expect;
const request = require('request');

const data =[
    {id:1,name:'A'},
    {id:2,name:'B'},
    {
        id:3, name:'C'
    }
];

describe('Node.js REST API Test Suit',()=>{
    // succes test
    it('should return status code as 200',(done)=>{
        request('http://localhost:7090/api/receive',(error,response,body)=>{
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

 // succes test
    it('should return body as Hello World',(done)=>{
        request('http://localhost:7090/api/receive',(error,response,body)=>{
            expect(body).to.equal('Hello World');
            done();
        });
    });
 // succes test
    // it('should return data as JSON',(done)=>{
    //     request('http://localhost:7090/api/data',(error,response,body)=>{
    //         expect(body).to.equal(JSON.stringify(data));
    //         done();
    //     });
    // });

     // succes test for failure response

    it('should return status code as 500',(done)=>{
        request('http://localhost:7090/api/data/0',(error,response,body)=>{
            expect(response.statusCode).to.equal(500);
            done();
        });
    });

    // test for post

    it('should return modified array after adding new record in array in post request',(done)=>{
         let record = {
             id:3, name:'C'
         };

         request.post('http://localhost:7090/api/data', {
             headers: {
                "Content-Type":"application/json"
             }, 
             body:JSON.stringify(record)
         },(error,response,body)=>{
             console.log(JSON.stringify(data));
            expect(body).to.equal(JSON.stringify(data));
            done();
         });
    });

});