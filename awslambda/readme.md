# Creating the AWS Lambda REST APIs
1. aws-sdk package
2. serverless package
    - used to pacage the application code and this package conects to AWS based on aws configurtaion(?) and deploy the serverless lambda app on AWS Lambda
        - run aws cli command from local machine (Recommended step)
            - https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html#cliv2-windows-install
        - aws configure
            - Ask for ACCESS_KEY_ID
            - Ask for ACCESS_SECRET_KEY
            - Ask for REGION
                - region is the region where tou want all resources
            - Output format     
        - install the serverless in the gobal scope
            - npm install -g serverless
        - use following command to deploy the Lambda applicaiton    
            - serverless deploy      
                - read the server configuration file
                    - serverless.yml
                        - contains the deployment configurationfor lambda
3. aws-serverless-express
    - An integration between AWS with Express REST APIs in Serverless environment
        - Selecting the Node.js Environemnt for Lambda    
        - Allocating the Communicaiton Port for the application      

4. Create the applciation Code
    - Logic for REST API using Express
    - May be CRUD operations with RDS/DynamoDB, etc.
5. Create a Lamdba server configuiration code file (VERY-IMPORTANT)
    - Use aws-serverless-express
    - USe the Application COde file
        - This file export the express object for creating server
    - create the server and expose the server on Ednpoints by creating http proxy
        - Proxy is the address from where the server is available for accepting HTTP requests and provide execution  
6. Create a Serverless deployment configuration file
    - This file will provide the following information for Lambda
        - the 'service', the name of deployment service in Lambda
        - the 'provider'
            - the configuration
                - the 'name' of the ptovider 'aws'
                - the 'runtime' will be the hosting env. nodejs14.x
                - the 'memorySize', the min memory required while execution
                - the 'timeout', the request timeout
                - the 'state', the deployment stage 'production' or 'test'
                - the 'region', teh deplpoyment region
        -  the 'functions', thhe configuration of the actula deployment
            - the 'api', the serverless REST API deployment
                - the 'handler'
                    - the aws-serverless-express confoiguration object from 'lambda.js'
                - the 'events'
                    - the Protocol configurations for requesting the REST APIs
                         - http: ANY {proxy+}
                            - support http and https for the proxy with all the HTTP Methods
                         - http: ANY /   
                            - All the requetsted header information must be maintained at proxy e.g. AUTH Header values
7. to deploy the Serverless Lambda application run the fllowing command from the project path from the terminal window
    - serverless deploy
        - Load the serverless.yml file
            - load the lambda.universal
                - load server.js
        - Create a zip build
        - upload it on AWS
        - Deploy
        - Publish the endpoints                                    
                                        