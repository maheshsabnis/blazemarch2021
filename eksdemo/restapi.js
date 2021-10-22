const express = require('express');
const cors = require('cors');
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

let port = process.env.PORT || 6002;

// define an instance of express
let instance = express();

// configure MIME-TYPE Formatters
// only support for JSOn data
instance.use(express.urlencoded({extended:false}));

instance.use(express.json()); 

// configure cors middleware
instance.use(cors({
    origin: '*', // specific origin must be specified is any
    allowedHeaders: '*', // specific headers
    methods: '*' // specific methods 
}));

// get request
instance.get("/api/employees", (req,resp)=>{
    resp.status(200).send({message:'Records Received Successfully', data: JSON.stringify(emps)});
});

// get request by id in header parameter
// parameter is added in URL using ':<PAREMETER-NAME>'
instance.get("/api/employees/:id",  (req,resp)=>{
    // read the header
    let id = req.params.id; // must match with actual parameter name

    let emp = emps.filter((e,i)=>{
        return e.EmpNo === parseInt(id)
    });
    console.log(`Searched ${JSON.stringify(emp[0])}`);
    if(emp[0] === undefined){
        resp.status(404).send({message:'Records is not found'});
    } else {
        resp.status(200).send({message:'Records Searched Successfully', data: JSON.stringify(emp[0])});
    }
});

// the post request
instance.post("/api/employees",(req,resp)=>{
    // read data from body
    let emp = req.body;
    console.log(`Data Received from Body ${emp}`);
    emps.push(emp);
    resp.status(200).send({message:'Records Received Successfully', data: JSON.stringify(emps)});
});

// put 
instance.put("/api/employees/:id",(req,resp)=>{
    // logic for put to read data from parameter and body both
    // if id is not found or 0 then return error
});

// delete 
instance.delete("/api/employees/:id",(req,resp)=>{
    // logic for put to read data from parameter and body both
    // if id is not found or 0 then return error
});

// start listening on the port
instance.listen(port,()=>{
    console.log('Started listening in port 6002');
});
