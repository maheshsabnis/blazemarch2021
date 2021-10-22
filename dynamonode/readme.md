# Accessing the AWS Services e.g. DynamoDB using Node.js applications
1. The aws-sdk
    - The package used to provide an access of all AWS services in JavaScript Applications
    - npm install --save aws-sdk

    - DynamoDB object
        - USed to define an access of the DynamoDB application from Node.js apps
        - Provides a 'createTable()' method to create a Table using Code
        - config.update()
            - used to authenticate the application to access the DynamoDB
        - DynamoDB.DocumentClient()
            - This object is used for following purposes
                - Query Table
                - Create Document
                - Update Document
                - Delete Document  