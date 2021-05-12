const express  =require('express');

const instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
let port = process.env.PORT || 7091;

let customers =[
    {CustomerId:101, CustomerName:'ABC'},
    {CustomerId:102, CustomerName:'PQR'},
];

instance.get('/api/customers',(req,resp)=>{
    resp.status(200).send(JSON.stringify(customers));
});


instance.listen(port,()=>{
    console.log('Server started');
});