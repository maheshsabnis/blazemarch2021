const express  =require('express');

const instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
// defining the Hosting Free port for the API
// if the 7090 is blocked by some other proccess
// the the hosting env. can allocate the port 
let port = process.env.PORT || 7090;


let data =[
    {id:1,name:'A'},
    {id:2,name:'B'}
];

instance.get('/api/receive',(req,resp)=>{
    resp.status(200).send('Hello World');
});

instance.get('/api/data',(req,resp)=>{
    resp.status(200).send(data);
});

 
instance.post('/api/data',(req,resp)=>{
    console.log(`Received data ${JSON.stringify(req.body)}`);
      data.push(req.body);
      console.log(`Added Data ${JSON.stringify(data)}`);
    resp.status(201).send(data);
});

instance.listen(port,()=>{
    console.log('Server started');
});