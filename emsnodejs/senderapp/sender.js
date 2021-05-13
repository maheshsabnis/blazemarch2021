const amqp = require('amqplib');
// subscribe to the local running Q Servivce
let open = require('amqplib').connect('amqp://localhost');

// publish the message
// 1. open the endpoint for RabbitMQ and create a communicaiton channel

open.then((conn)=>{
    return conn.createChannel(); // this channel will be used to publish messages
}).then((ch)=>{ // use this channel defining queuename and sending data
    let queneName = 'myq';

    // connect to queue and send message. 
    // the message can be 'string', 'object', 'date', 'number'
    // the 'assertQueue(qname)', method uses 'BlueBird' promise based library for following operations
    // 1. Check if  the queue is available and ready to acceopt data
    // 2. Establish the conneciton wtih queue 
    // 3. The sender will be provide access to send message thriough the queue 
    return ch.assertQueue(queneName)
            .then((done)=>{
                // send the actual data
                let data = [
                    {id:101, name:'A'},
                    {id:102, name:'B'},
                    {id:103, name:'C'}
                ];

                // send the message
                return ch.sendToQueue(queneName, Buffer.from(JSON.stringify(data)));    
            });

}).catch((error)=>{
    console.log(`Communication Error Occured ${error}`);
});