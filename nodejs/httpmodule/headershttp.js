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
   // using headers info for AUTHORIZATION
   let headers = req.headers;

   // read the authorization key from Request
   let authObject = headers.authorization;

   console.log(`Received Values ${authObject}`);
   resp.end(JSON.stringify(authObject));
});




// listening
server.listen(6001);
console.log(`Server Started listening in port 6001`);