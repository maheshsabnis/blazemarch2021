const express = require('express');
const aws = require('aws-sdk');
aws.config.update({
    accessKeyId:' ',
    secretAccessKey:' ',
    region:' ',
    endpoint:' '
});

let port = process.env.PORT || 9070;

// create an instance of DynamoDB object to perform operations
let dynamoDB = new aws.DynamoDB();

let documentClient = new aws.DynamoDB.DocumentClient();


let instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

instance.get('/api/emp/read',(req,resp)=>{
    // reading all records
    documentClient.scan({
        TableName:"Employees",
    }, (error,data)=>{
        if(error){
            resp.status(500).send({message:`Error Ocured ${error.message}`});
        }
        resp.status(200).send({message: `${JSON.stringify(data.Items)}`});
    });
});


instance.get('/api/emp/read/:dname',(req,resp)=>{
    // read dname from header
    let dname = req.params.dname;
    // reading all records
    documentClient.query({
        TableName:"Employees",
        // #dname is the Attribute-Variable
        // :dname is the value for the Attribute-Variable
        KeyConditionExpression: "#dname=:dname",  // condition
        ExpressionAttributeNames: {
            "#dname": "DeptName" // the attribute that will map with the Attribute-Variable
        },
        ExpressionAttributeValues:{
            ":dname":dname // read the parameter value from header for Attribute-Variable
        }
    }, (error,data)=>{
        if(error){
            resp.status(500).send({message:`Error Ocured ${error.message}`});
        }
        resp.status(200).send({message: `${JSON.stringify(data.Items)}`});
    });
});

instance.post('/api/emp/create',(req,resp)=>{
    documentClient.put({
        TableName: "Employees",
        Item: req.body
    },(error,data)=>{
        
            if(error){
                resp.status(500).send({message:`Data Addition ${error.message}`});
                return;
            }
            resp.status(500).send({message:`The Record is created ${data.ConsumedCapacity}`});
    });
});


instance.put('/api/emp/update',(req,resp)=>{
    documentClient.update();
})

instance.delete('/api/emp/delete',(req,resp)=>{
    documentClient.delete();
})


instance.listen(port,()=>{
    console.log('Express with DynamoDB Started');
});

// export the express object so that aws-serverless-express will use it to create the server
module.exports = instance;
