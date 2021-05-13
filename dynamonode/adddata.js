const aws = require('aws-sdk');
const fs = require('fs');
// defining the credentials using the configuration

aws.config.update({
    accessKeyId:'',
    secretAccessKey:'',
    region:'',
    endpoint:''
});

// create an instance of DynamoDB object to perform operations
let dynamoDB = new aws.DynamoDB();

let documentClient = new aws.DynamoDB.DocumentClient();

// read the file
let employees = fs.readFileSync('./employees.json');
let empData = JSON.parse(employees.toString());
// iterate over an array and add records
empData.forEach((emp)=>{
    documentClient.put({
        TableName: "Employees",
        Item: emp
    },(error,data)=>{
        
            if(error){
                console.log(`Data Addition ${error.message}`);
                return;
            }
            console.log(`The Table is created ${data.ConsumedCapacity}`);
    });
});



