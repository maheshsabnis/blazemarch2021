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

                 // status code, responsePhrase           
    resp.writeHead(200, {'Content-Type':'application/json'});
    // writing the response in Response Object
    resp.write(JSON.stringify(emps));
    // end the response to release the thread
    resp.end();
});




// listening
server.listen(6001);
console.log(`Server Started listening in port 6001`);