let queuename = 'myq';
// connect to the q

let open = require('amqplib').connect('amqp://localhost');

// write the consumer
open.then((conn)=>{
    return conn.createChannel();
}).then((ch)=>{
    // sunscribe to the queue is exist
    return ch.assertQueue(queuename)
             .then((done)=>{
                 // consume the message from queue
                 // the type of teh message is 'ConsumeMessage'
                 // this type is internally uses the Bufer
                 return ch.consume(queuename, (message)=>{
                     // process the message
                     if(message !== null){
                         console.log(message.content.toString());
                         // please send the acknowledgement
                         // so that the chennel will inform back to queue that
                         // it can now Purge the message
                         ch.ack(message);
                     }   
                 });
             });
}).catch((error)=>{
    console.log(`Error Occured ${error}`);
});

 