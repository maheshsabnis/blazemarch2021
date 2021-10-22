const express  =require('express');

const instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
let port = process.env.PORT || 7092;

let products =[
    {ProductId:101, ProductName:'Laptop'},
    {ProductId:102, ProductName:'RAM'},
];

instance.get('/api/products',(req,resp)=>{
    resp.status(200).send(JSON.stringify(products));
});


instance.listen(port,()=>{
    console.log('Server started');
});