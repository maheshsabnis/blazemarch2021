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
    // eveluate the requet for QueryString in url
    console.log(`The Url = ${req.url}`);
    console.log(`Method = ${req.method}`);

    // splillting the url and reading the first entry from resultant array

    let urlValue = req.url.split('/')[1];
    console.log(`The Url after split = ${urlValue}`);

    // only check for dname=<VALUE> and use it
    if(urlValue !== 'favicon.ico'){
         // split key value again
         let queryValue = urlValue.split('=');
        // the query must be http://localhost:6001/deptname=IT
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
              // resp.end();             
         } else {
                resp.writeHead(200, {'Content-Type':'application/json'});
                resp.write(JSON.stringify(emps));
         }
    }

    resp.end();
});




// listening
server.listen(6001);
console.log(`Server Started listening in port 6001`);