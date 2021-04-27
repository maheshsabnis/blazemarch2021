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


    - Path

        - How to Access  Files in File System by using Server Path
2. Creating Custom Modules
    - Creating Multi-Layer Server-Side JavaScript Application
3. Use Third-Party External Modules
    - Promise Modules e.g. q
4. Web Application Framework
    - Express
        - Creating Express Web Application with Static Resources e.g. HTML,JS and CSS files
        - Creating REST APIs using Express
        - Creating Data Access Layer using Sequelize
        - Securiung REST APIs using JSON Web Tokens
        - Express Session Management
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

