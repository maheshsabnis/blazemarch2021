import express from 'express';
import bodyParser from 'body-parser';
// import {presets, plugins} from './babel.config.js';
import "@babel/polyfill";
import {DataAccess} from './dal.js';

let instace = express();
const dal = new  DataAccess();
instace.use(bodyParser.urlencoded({extended:false}));
instace.use(bodyParser.json());

instace.get('/api/departments',dal.getData);


instace.listen(6001,()=>{
    console.log('started on port 6001');
});
