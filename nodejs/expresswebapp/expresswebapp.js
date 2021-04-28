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
