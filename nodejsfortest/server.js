const express  =require('express');

const instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
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

instance.get('/api/data/:id',(req,resp)=>{
    let id = parseInt(req.params.id);
    if(id === 0) return resp.status(500).send('Parameter Cannot be 0');
    resp.status(200).send(data);
});

instance.post('/api/data',(req,resp)=>{
    console.log(`Received data ${JSON.stringify(req.body)}`);
      data.push(req.body);
      console.log(`Added Data ${JSON.stringify(data)}`);
    resp.status(201).send(data);
});

instance.listen(7090,()=>{
    console.log('Server started on port 7090');
});