const express = require('express');
const multer = require('multer');
const path = require('path');
let instance  =express();


// configiration of multer middleware to define the storage path on disk
// make sure that the application has an access to this path (VERY IMP)
// desitnation: is the property to configure the file server
// req: the request context that contains the multipart form-data for file
// file: the file that is chunked in the request
// callback: the function, the access the actual path so that upload operation can be complted
let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null, './upload');
    },
    filename:(req,file, callback)=>{
        // this callback is used to contain the metadata information of the file
        callback(null, file.originalname);
    }
});

// define the multer instance that will be used to contans storage info and tje file operation feature that will be used in request
// myfile is the field name in HTTP Request thatb is postring the file and that contains the file chunks inside it
let upload = multer({storage:storage}).single('myfile');

instance.use(
    express.static(path.join(__dirname, './../node_modules/jquery/dist'))
);
instance.use(
    express.static(path.join(__dirname, './../node_modules/bootstrap/dist/css'))
);


instance.get('/',(req,resp)=>{
    resp.sendFile(__dirname + '/index.html');
});

// use resp.download(<FILE-PATH>) to download the file

// file upload endpoint using the 'upload()', the 'multer' middleware in express request 
instance.post('/uploadfile', (req,resp)=>{
    upload(req,resp,(err)=>{
        if(err){
            resp.status(500).end(`File Uploading Failed ${error}`);
        }
        resp.status(200).end('File is uploaded successfully');
    });
});

instance.listen(8090,()=>{
    console.log('Started server on 8090');
});

