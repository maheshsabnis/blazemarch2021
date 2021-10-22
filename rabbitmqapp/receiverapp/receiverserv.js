const express =  require('express');

let instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
let port = process.env.PORT || 8092;



// queuename
var q = 'myqueue';
// connect to Rabbitmq
  var open = require('amqplib').connect('amqp://localhost');

// var open = require('amqplib').connect('amqp://guest:guest@emessage-rabbit:5672');

// Consumer
open.then((conn) => {
    // create the channel
    return conn.createChannel();
}).then((ch) => {
    // subscribe to the queue
    return ch.assertQueue(q).then((ok) => {
        // consume the message from queue
        return ch.consume(q, function(msg) {
            if (msg !== null) {
                // process the received message
                console.log(msg.content.toString());
                // send acknowledgement
                // to channel so that data can be purged from the queue
                ch.ack(msg);
            }
        });
    });
}).catch(console.warn);