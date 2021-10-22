const aws = require('aws-sdk');

// defining the credentials using the configuration

aws.config.update({
    accessKeyId:'',
    secretAccessKey:'',
    region:'',
    endpoint:''
});

// create an instance of DynamoDB object to perform operations
let dynamoDB = new aws.DynamoDB();


createTable();
 // Partition Key: the atribute which is used for the Logical Groupig of documents stored in Table 
 // Sort Key: The attribute used to rrange data in table

function createTable(){
    dynamoDB.createTable({
        TableName: "Employees",
        // schema of the Table
        KeySchema: [
            {
                AttributeName:'DeptName',
                KeyType:"HASH"  // for the partition 
            },
            {
                AttributeName:'EmpNo',
                KeyType:"RANGE"  // for the Range 
            } 
        ], // Partition Key and Sort Key
        // Setting the type for each attribute in the KeySchema
        AttributeDefinitions:[
            {
                AttributeName: 'DeptName',
                AttributeType:'S'
            },
            {
                AttributeName: 'EmpNo',
                AttributeType:'S'
            } 
    ], // attriutes (aka columns)
        ProvisionedThroughput:{
            ReadCapacityUnits:5,
            WriteCapacityUnits:5
        } // Read and Write Capacities 
    }, (error,data)=>{
        if(error){
            console.log(`Table creation failed ${error.message}`);
            return;
        }
        console.log(`The Table is created ${data}`);
    });


}
