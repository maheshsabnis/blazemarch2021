const amqp = require('amqplib');
const express =  require('express');
// subscribing to the RabbitMQ
// default is localhost:15672
  //var open = require('amqplib').connect('amqp://localhost');

let instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
let port = process.env.PORT || 8091;



// amqp://guest:guest@emessage-rabbit:5672

instance.post('/api/sender', (req,resp)=>{
    var open = require('amqplib').connect('amqp://guest:guest@emessage-rabbit:5672');    
// Publisher
open.then((conn) => {
    return conn.createChannel(); // create channel so that message can be send
}).then(function(ch) {
    let queueName = 'myqueue'; // defining the queue-name
    // connect to queue 'myqueue' and then send message string, object, date, number
    // subscribe to queue by creating the queue in rabit mq 
    return ch.assertQueue(queueName).then((ok) => {
        // // data to be send
        // let obj = [{ id: 101, name: 'A' },
        //     { id: 102, name: 'B' },
        //     { id: 103, name: 'C' }
        // ];
        // send data to the queue by buffering it
       let res = ch.sendToQueue(queueName, Buffer.from(JSON.stringify(req.body)));
       if(res){
           resp.status(200).send('Message is Send Successfully');
       } else {
        resp.status(500).send('Error Occuren in Sender Service');
       }
    });
}).catch(console.warn);

});



instance.listen(port,()=>{
    console.log('Sender started');
});