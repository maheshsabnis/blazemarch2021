const http = require('http');

let emps = [
    {EmpNo:101, EmpName:'ABC', DeptName:'IT'},
    {EmpNo:102, EmpName:'PQR', DeptName:'HR'},
    {EmpNo:103, EmpName:'ABC', DeptName:'SL'},
    {EmpNo:104, EmpName:'PQR', DeptName:'IT'},
     {EmpNo:105, EmpName:'ABC', DeptName:'HR'},
    {EmpNo:106, EmpName:'PQR', DeptName:'SL'},
     {EmpNo:107, EmpName:'ABC', DeptName:'IT'},
    {EmpNo:108, EmpName:'PQR', DeptName:'HR'},
    {EmpNo:109, EmpName:'PQR', DeptName:'SL'}
];


const server = http.createServer((req,resp)=>{
  // check the request method and then accordingly process teh request 
    if(req.method === 'GET') {
        let urlValue = req.url.split('/')[1];
        if(urlValue !== 'favicon.ico'){
            let queryValue = urlValue.split('=');
            if(queryValue[0] === 'deptname') {
                if(queryValue[1] === undefined) {
                    resp.writeHead(200, {'Content-Type':'text/html'});
                    resp.write('Sorry! Filter Criteria is not specified');
                } else {
                            let result = emps.filter((e,idx)=>{
                                return e.DeptName === queryValue[1];
                            });
                            resp.writeHead(200, {'Content-Type':'application/json'}); 
                            resp.write(JSON.stringify(result));
                }
            } else {
                    resp.writeHead(200, {'Content-Type':'application/json'});
                    resp.write(JSON.stringify(emps));
            }
        }
    }
    if(req.method === "POST"){
         // define a variable fopr stpring the posted data stream
         let receivedData;
         // set the request encoding
         req.setEncoding('utf-8');
         // subscribe to the request event to process teh request
         req.on('data',(chunk)=>{
            console.log(`Receivd Data in POST = ${chunk}`);
            // write validation logic or any other processing logic
            receivedData = JSON.parse(chunk);
         });
         req.on('end',()=>{
             // process data and complete (end) processing
             emps.push(receivedData);
             console.log(`After Modification ${emps}`);
         });
    }

    if(req.method === 'PUT'){
        console.log('PUT');
    }
    resp.end();
});




// listening
server.listen(6001);
console.log(`Server Started listening in port 6001`);