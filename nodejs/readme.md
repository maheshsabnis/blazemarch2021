# Node.js Programming
1. Using Standard Modules
    - Module?
        - Concept that can be mapped with 'library file' e.g. dll that contains redistributable logic
        - Install the module as Package using 
            - npm install --save <PACKAGE-NAME>
            - All Standard packages are avaiable from
                - Node Package Manager Site https://www.npmjs.com
                - All Standard Node.js packages are managed and maintained by OpenJS using github
        - Guidelines to choose package for Programming for JS Open FullStack with Node.js. The MongoDb-Express-React-Node (MERN) Application. MEAN.
            - MySQL-Express-React-Node
            - DynamoDb-Express-React-Node
        - Lifetime of the Pacakge
        - Support for the package
            - Community Spread
            - Learning Curve and Fundamentals
        - Popularity on Git w.r.t. Users        
        - After installing Node.js all standard modules are by-default available
        - These modules should be used in the the application file using following statement
            - let identifier = require('<MODULE-NAME>');
                - require() an object that will look for te module in standard module library in Node.js process and if found it will 'cached' for the lifetime of that Node.js application. (Memory Optimization feature aka Memoization)
                - If moudule is not found in the Node.js process, it will searched from local path and if found it will be loaded
                - If not found anywhere, then it will generate Runtime error as 'MODULE NOT FOUND'
                - The 'require()' object is a result of RequireJS integrated with Node.js and used to load modules asynchronously from file path (in case of external modules)     
            - Node.js + ES 6 Module features, availabel from Node.js 11+
                - using 'import' statement
                    - By defualut not supported for Execution
                        - Solution 1: Rename .js file to .mjs
                        - Solution 2: modify package.json  for following sections
                            "type":"module"
                - VERY IMP NOTE: Not all external JS Node.js modules are  supporting ES 6 e.g. Sequelize      
    - To use the Node.js module intellisense install following package                   
        - npm install --save-dev @types/node
            - @types means a typedefinition (typedef) that contains metadata for modules for intellisense 
    - VERY IMPO FEATURE OF NODE.JS
        - This runtime allows us to create custom Web Server for HTTP Request Management         
    - Install nodemon in globalscope to  contineously run the server js file for every change made in it
        - npm install -g nodemon   
    - File System
        - Rea/Write Files and Directories
        - the 'fs' module 
            - Used to interact with File System for following operation
                - Read / Write Files using Sync and Async Methods
                - Read / Write Directories using Sync and Async Methods
``` javascript
// Writing file Synchronously
// 1. load the fs module

const fs = require('fs');

// write the file synchronously

fs.writeFileSync("./myfile.txt", "The file is Written using Node.js fs module");

console.log('File is written Successfuly');

// write file asynchronously
// if file is already exist it will be replaced
fs.writeFile('mynewfile.txt', "Data Written Asynchronously", (error)=>{
    // always check for errors
    if(error){
        // possible stop the execution
        return `Error Occured while Writing file ${error.message}`;
    }
    console.log(`File is Successfully Created Asynchronously`);
});

// Appending the file
// the file will be created if not exist else the data will be appended
fs.appendFile('mynewfile1.txt', "New Data in file", (error)=>{
    // always check for errors
    if(error){
        // possible stop the execution
        return `Error Occured while Writing file ${error.message}`;
    }
    console.log(`File is Successfully appended Asynchronously`);
});

// opening the file with the flag
// w is OpenMode for opening file , if it does not exist
// then it will be created as empty file
fs.open('myfile2.txt', 'w', (error, file)=>{
    if(error){
        // possible stop the execution
        return `Error Occured while Writing file ${error.message}`;
    }
    console.log(`Opened the File ${file}`);
});

// renaming file
// using the rename function

fs.rename('myfile.txt', 'myfile3.txt',(error)=>{
    if(error){
        // possible stop the execution
        return `Error Occured while Writing file ${error.message}`;
    }
    console.log(`File is Renamed`);
});

// delete the file
// using 'unlink' method

fs.unlink('myfile3.txt', (error)=>{
    if(error){
        return `Error Occured while Writing file ${error.message}`;
    }
    console.log(`File is deleted Successfully`);
});


```      

Read file
``` javascript
const fs = require('fs');

// synchronous read
// if error occured in sync operations then try..catch block is best practice (mandatory)
// parameter 1: tyhe file path
// parameter 2: tyhe file encding for reading
try{
let data = fs.readFileSync('myfile20.txt', {encoding:'ascii'});
    console.log(`Data Read from file ${data}`);
} catch(e){
    console.log(`Exception Occured ${e.message}`);
}

// async read

fs.readFile('myfile20.txt', {encoding:'ascii'}, (error,data)=>{
    if(error) {
        console.log(`Error in reading file ${error.message}`);
        return;
    }
    console.log(`Data Read from file Asynchronously ${data}`);
});
for(let i=0;i<100;i++){
    console.log(`i = ${i}`);
}
```

Using Directories

``` javascript
const fs =  require('fs');

// create a directory
// fs.mkdir('tempdir', (error)=>{
//     if(error){
//         return `Error ${error.message}`
//     }
//     console.log(`Directory Created....`);
// });

// read all files from directory
// use 'fs.stat' to check if the current entry in directory is file or subdirectory


fs.readdir('./tempdir', (error,files)=>{
    if(error){
        return `Error ${error.message}`
    }
    if(files.length > 0) {
        files.forEach((file,idx)=>{
            fs.stat(`./tempdir/${file}`, (err,stat)=>{
                if(err){
                    return `Error in stat ${err.message}`
                }
                if(stat.isFile()){
                    // display file
                    console.log(file);
                    console.log(fs.readFileSync(`./tempdir/${file}`,{encoding:'ascii'}));
                }
            });
        });
    } 
});

```

Sending the Query in URL

``` javascript
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
```

    - Http
        - Creating Simple Web Server
        - Creating Web Server with an Integration with File System
        - Http Operations with Events Get / Post
        - Accessing External Services using Http by making Node.js as client app
        - the 'http' module
            - the 'createServer(RequestListenerCallback)'
                - RequestListenerCallback with following parameter
                    - Request
                        - Represent HTTP Request
                            - url
                                - querystring
                            - method
                                - get / post
                            - on() method
                                - Request Processing Events, all request events have the callback subscription to execute logic to process the event
                                    - 'data'
                                        - read data for POST request and start processing it
                                        - define a callback functions (aka Event Handlers)
                                            - listener(chunk)
                                                - chunk is the data posted by the client 
                                    - 'end'
                                        - end the request processing
                                    - 'error'    
                                        - any possible request error
                                    - close
                                        -  closing the request processing
                                    - pause
                                    - resume    


                            - setEncoding()
                                - define the Request Message Encoding for Request data processing            
                    - Response
                        - WriteHead()
                            - Write the request header
                        - Write()
                            - Write the response
                        - end()
                            - Close the Response Object and hence the Processing on the server to relese the allocated thread for HTTP Processing    
            - the createServer() method return 'Server' object
                - the listen() method for this object
                    - this method expose a port on which the server is running           
Simple Server
``` javascript
const http = require('http');

let emps = [
    {EmpNo:101, EmpName:'ABC', DeptName:'IT'},
    {EmpNo:102, EmpName:'PQR', DeptName:'HR'}
    
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
```
GET annd POST

``` javascript
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
```

Header

``` javascript
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
```
    - Using HTTP Module + FS Module to creae a Web Server for Accepting requests for HTML resources and geberating response

``` javascript
const fs = require('fs');
const http = require('http');

let server = http.createServer((req,resp)=>{
    resp.writeHead(404, {'Content-Type':'text/html'});
    fs.readFile('./views/home.html', {encoding:'ascii'}, (error,file)=>{
        if(error){
            resp.write('The Requested Resource is not found');
            resp.end();
        }
        resp.write(file.toString());
        resp.end();
    });
    
});


server.listen(6001);
console.log('Started on port 6001');
```
Web Sreverer using HTTP and File with request url routig

``` javascript
const fs = require('fs');
const http = require('http');

let server = http.createServer((req,resp)=>{
  if(req.url === "/home"){
        resp.writeHead(404, {'Content-Type':'text/html'});
        fs.readFile('./views/home.html', {encoding:'ascii'}, (error,file)=>{
            if(error){
                resp.write('The Requested Resource is not found');
                resp.end();
            }
            resp.write(file.toString());
            resp.end();
        });
  } else {
    if(req.url === "/about"){
        resp.writeHead(404, {'Content-Type':'text/html'});
            fs.readFile('./views/about.html', {encoding:'ascii'}, (error,file)=>{
                if(error){
                    resp.write('The Requested Resource is not found');
                    resp.end();
                }
                resp.write(file.toString());
                resp.end();
            });
        }
        else {
            resp.write('Please check the URL');
            resp.end();
        } 
    }
});


server.listen(6001);
console.log('Started on port 6001');
```

    - using HTTP Module for requesting for Data (Read/Write) to the external API
        - http.request(<SERVER-OPTIONS>, callback(res));
            - SERVER-OPTIONS
                - Metedata of the external server
                    - host: hostname / ip address
                    - port: if any specific port
                    - path: url of the REST API e.g. /api/...
                    - method: GET / POST / PUT /DELETE
                    - headers: {header values e.g. MIMT TYpes, AUTHORIZATION, etc}

    - Path

        - How to Access  Files in File System by using Server Path
2. Creating Custom Modules
    - Creating Multi-Layer Server-Side JavaScript Application
    - This is an approach of creating a seperate reusable logic file for the node application
        - the following module code is in file1.js
            - module.exports = {
                fn1:function(){....},
                fn2:function(){...}
            };
        - the fn1 and fn2 are exported so that they can be imported
        - To import the module e.g. in file2.js perform the following
            - const module = require('file1.js');
            - then access all functions
                - module.fn1();
                - module.fn2();
3. Use Third-Party External Modules
    - Promise Modules e.g. q
        - Promise().then().then().then()....catch(); w.r.t. browser
            - Sequential Execution
                - In the then() of first async call make other async call
            - Parallel
                - Promise.all([p1,p2,p3....,p10]); w.r.t. browser   
    - the 'q' the Promise Package
        - npm install --save q
    - the 'BlueBird' the Promise Package             
4. Web Application Framework
    - Express
        - Creating Express Web Application with Static Resources e.g. HTML,JS and CSS files
``` javascript
const express = require('express');
// using the pathe module to read files for the root of the server application
const path = require('path');

// define an instance of express
let instance = express();

// configuration to read static files

instance.use(
    express.static(path.join(__dirname, './../node_modules/jquery/dist'))
);
instance.use(
    express.static(path.join(__dirname, './../node_modules/bootstrap/dist/css'))
);

// define a router object to accept requests for pages

let router = express.Router();
// configure the express instance to use router in request processing
instance.use(router);

// use router expression for Request Processing
// parameter 1: URL for Route Expression
// parameter 2: request Handler Callback
// callback(req,resp)
// req: Request object for accpeting Request information
// resp: response obect to send HTTP Requese 
router.get('/',(req,resp)=>{

    // __dirname is Node.js global object to define the root path of
    // the application 
    // path.join(), will link the actual resource path with the
    // application root path

    resp.sendFile('index.html', {
        root: path.join(__dirname, './../views')
    });
});

router.get('/home',(req,resp)=>{
    resp.sendFile('home.html', {
        root: path.join(__dirname, './../views')
    });
});
router.get('/about',(req,resp)=>{
    resp.sendFile('about.html', {
        root: path.join(__dirname, './../views')
    });
});


// start listening on the port
instance.listen(6001,()=>{
    console.log('Started listening in port 6001');
});

```
        - Creating REST APIs using Express
            - RequestHandler's response object have followign methods
                - sendFile(), respond the static file
                - send(), can be used to respond any data (text/xml/json/binary)
                - json(), used to respond only JSON data
                - status(), used to respond status
            - To write the JSON data to Express REST APIs make sure the the Express uses the MIME Type Encoding to Parse the data
                - Add the followign middlewares in express inastance
                    - instance.use(express.json())
                    - instance.use(express.urlEncoded({extended:false})) 
                - NOTE: Earlier versions of Express was using 'body-parser' package for MIME TYPES, they are depricated in Express 4.0+    
            - The REST APIs must be confgured for Cross-Origine-Resource-Sharing (CORS) to enable accees of REST apis from browser clients from different domain with conditions as follows
                - http to https
                - https to http
                - Domain 1 to Domain 2    
                    - e.g. http://www.xyz.com to http://www.pqr.com
                - Headers
                    - The request must contain headers e.g. AUTHORIZATION headers
                - Method
                    - GET / POST   PUT / DELETE
            - the 'cors()' package
                - npm install --save cors              
``` javascript
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
instance.listen(6002,()=>{
    console.log('Started listening in port 6002');
});

```
        - Express JS Scenarios for Web Application Development
            - Upload Files
                - File Operations for Upload uses 'Multi-Part' stream communication
                    - Divide the File into chunks and process it for Upload
                        - <form enctype="multipart/form-data">
                            - form-data is a serialization of FormModel aka name=value pair to be posted
                            - multipart/form-data
                                - Chunks of Binary values for files are integrated in FormMoldel serialization when the form is posted
                - Node.js the 'Multer' package
                    - This is a middleware for handling multipart/form-data for uploading files from Clients
                        - Configure the server for Stream of Files for Upload
                        - Server must uses 'pipe()' for reaceiving the Chunks from HTTP and Concatinate all chunks for creating file
                            - Node.js, Stream and Pipe packages
                            - Node.js, busboy package
                                - Encapsulated Stream and Pipe for File Upload Operations
                            - Node.js, 'multer' package that encapsulate the busboy to make fileStreaming, Piping and Cocatination easy                    
            - Download Files
        - Creating Data Access Layer using Sequelize
            - Object Relational Mapping (ORM) with Node.js
                - Sequelize is a Promise based Node.js ORM for MS-SQL, MySql, MariaDb, Postgres and SqLite
                - Database-First Approach
                    - Model Classes are generated based on Table Schemas and their relationships 
                    - Model Classes are JavaScript Function Objects those export Table Columns as Properties so that they can be used as Node.js modules
                        - Function object is Node.js Custom Module module.exports={};
                    - Recommended in Production if the Database is ready and full-proof 
                - Mode-First aka Code-First Approach    
                    - USe Sequelize APIs to create a Model definition
                        - A Custom Node.js Module aka function that will contains 'properties' those will be reflected in Database Tables for Mapping with Columns
                        - Setting releationship across modesl must be managed by Model Creator (important and critical)
                        - Recommended when an application is designed from scratch
                            - The Team must have accurate information about Schemas and relations across them e.g. One-to-many, many-to-many, etc.   
            - Sequelize package, (IMP: DO not have ES 6 Module Support with Current Version 6.0+)
                - npm install --save sequelize
                - Sequelize("dbName", "username", "password", <OPTIONS>) object
                    - This object is used to connect to database based on parameters
                        - Database Name: dbName
                        - User Name: username
                        - Password: pwd
                        - OPTIONS: the JSON object with following properties
                            - host: <localhost|IP Address | SERVER-NAME>, SERVER-NAME if on Cloud then the instance name e.g. AWS RDS Instance name
                            - dialect: <DB-PROViDER>, 'mysql' | 'mssql' | 'mariadb' | 'postgres' | 'sqlite'
                            - pool: JSON Object with Connection Pooling 
                                - {min:, max:}
                            - define: JSON object for timestamp used for COncurrency (used in CLoud)      
                - DataTypes Object
                    - The Mapped datatypes w.r.t. Database types
                        - String for Varchar, Char, String
                        - Number for int
                        - Boolean for bit, boolean
                        - Date for DateTime, Date
                - Model object                
                    - The Base Type for JavaScript Function to inform Sequelize that how the function is mapped with Database Table 
                - Complete Command to use Sequelize for MySql to use Database First Approach
                    - npm install -g sequelize mysql2 sequelize-auto
                        - The Developer Macbnhie must be connect to mysql instance to create the Models using sequelize-auto CLI tool
                    -  npm install --save sequelize mysql2 sequelize-auto
                - Command to generate Models in Database Firstb Approach
                    - sequelize-auto -h <HOST-MACHINE-NAME | IP-ADDRESS | CLOUD-INSTANCE-NAME> -d <DATABASE-NAME> -u <USER-NAME> -x <PASSWORD> --dialict <DB-PROVIDER> -o <PATH-OF-FOLDER-TO-CREATE-MODEL-FILES> -t <BLANK-SPACE-SEPERATED-LIST-OF-TABLES>

                        - --dialict mysql | mssql | mariadb | pg
                        - -o if not provided in command will create a models folder and all .js model files will be createdn in it
                        - if -t is not provided the it will take all table in database
                - Db Operations 
                    - Sequelize.sync({force:<BOOL>})
                        - Connect to Database and initialize the connection for transactions
                        - Return 'Promise' Object   
                        - force: if this is true, the Table will be overwritten absed on Model Schema (this is default)
                            - If the table is already available with some data then set the value of force as false. {force:false}    
                    - Model Methods, returning 'Promise' object 
                        - findAll(), returns all records from table
                        - findOne({where:{<CONDITION>}}), return a record based on Where CLouse Condition
                        - create(OBJECT to Create), insert new record
                        - update({OBJECT-TO-UPDATE}, {where:{<CONDITION>}}), update record based on condition
                        - destroy({where:{<CONDITION>}}), delete record based on condition          


        - Securiung REST APIs using JSON Web Tokens

        - Express Session Management
    - npm install --save express express-session cors
    - Data Access
        - npm install --save sequelize sequelize-auto mysql2
    - Sequelize CLI using Sequelize-auto
        - sudo npm insstal -g sequelize-auto
    - JWT
        - npm install --save jwt           
5. On-Premises Clusters using PM2        

# Node.js for Microservices
1. Node.js + Docker
    - dockerfile
    - docker-compose
2. Microservices with AWS Resources
    - Access DynamoDB
    - Serverless Deployment
    - AWS Elastci Kubernetes Services (EKS)
        - Clusters
        - Api Management
        - Elastic Search        


# Hands-on-Labs

# Date 27-April-2021

1. Create a Http Based Web Server which must have following fearures
    - Admin Folder
        - Contains HTML Pages Accessible by Admin Role
    - Manager Folder    
         - Contains HTML Pages Accessible by Manager Role
    - Clerk Folder    
         - Contains HTML Pages Accessible by Clerk Role    
    - Create a Map that contains Role NAme as Key and UserName with Password as Values
        - {'Admin', [{UserName:'u1', Password:'pwd'}]}  
            - likewise multiple users for Manager and Clerk
    - When the Request is made for the page send the UserNAme and Password in header and based on validity of UserName, access roles and based on role provide an access for the page
        - e.g. if Url is http://localhost:6002/mypage.html is requested the Node.js should check if the current user has access of these pages or not.
    - Create a Product array and make sure that only Admin can Add.Update/Delete/Read Products
    - Manager can Add/Update Products
    - Clerk can only Read products                    


# Date 28-April-2021

1. Create Seperate pages for List of Employees, Create Employee, Update Employee and Delete EMployee
    - ListEMployees.html
        - Show List of Employees when the page is loaded
        - Add a link on this page to create a new employee
        - If data is showin in table, then add link or button in each row to navigate to UpdateEmp.html to load Employee to Update and Update the employee
        - If data is showin in table, then add link or button in each row to navigate to DeleteEmp.html to load Employee to Deete and Delete the employee
        - UpdateEmp.html and DeleteEmp.html must contians links for navigating back to ListEmployee.html
    - CreateEmp.html
        - UI for Creating employee
        - Add link to navigate to List page


# Date 29-April-2021

1. Write a service to upload and downlod files usign Express RES APIs. Make sure that the API has following
    - API should accept only .png / .bmp files
    - The Metadata of the file e.g. name, size and file type must be seperately stored in Database (for the eComm application)
    - Make sure that the Service will not accept files other than .png / .bmp size more than 5 mb
    - The Customer must be provided to download the invoice of the Order (research on PDF or bmp or png invoicing format)

2. All REST APIs must use the Common Code Standard for DAL and its methods    
    - The DAL must be given the validated models
    - The API.js file must be accessing DAL and will not have any code for Database operations and Data Validations
        - Single API for Categories and SubCategories
        - Single API for Order and OrderDetails
        - Single API for User Management
        - API for Vendor
        - Create an API that will ask the Customer to Register first by creating user and then provide Customer Information
        - The Vendor Must be Approved by Admin to Upload the Products
        - Product Search must be a open API (accessible w/o authentication)
        - Create a Log for Application Access that will contains information about
            - Successful Login
            - Failed Login
        - Create a constant for all Hard-Coded Messages    