const express = require('express');
// subscribe to the local running Q Servivce
let open = require('amqplib').connect('amqp://localhost');

let instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());


instance.post('/api/sender',(req,resp)=>{
// additional logic of connecting to database and performing CReate/Update oeprations and after that recive the data from database and pass to q so that it will be available for othern applications 

    open.then((conn)=>{
        return conn.createChannel(); messages
    }).then((ch)=>{  
        let queneName = 'myq';
       
        return ch.assertQueue(queneName)
                .then((done)=>{
                    let res =  ch.sendToQueue(queneName, Buffer.from(JSON.stringify(req.body)));
                    if(res){
                        resp.status(200).send('Data is send successfully');
                    } else {
                        resp.status(500).send('Some Error Occured');
                    }   
                });
    
    }).catch((error)=>{
        console.log(`Communication Error Occured ${error}`);
    });
});





instance.listen(9010,()=>{
    console.log('sender is running on port 9010');
});