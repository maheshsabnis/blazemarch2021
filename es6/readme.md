# ES 6 Concepts
- 3 Languages currently having ES 6 support
    - TypeScript
        - Microsoft
            - Open Source, based on C# 
                - Typed JavaScript
                    - Superset of JavaScript with DataType Support
            - Angular, the main stake holder
            - React, Vue, ect.
        - TypeScript File (.ts) --> TypeScript Compiler --> JavaScript (.js)  
    - High-Level JavaScript aka Modern JavaScript aka ES 6
        - W3C controlled Language maintained by Mozila Foundation and OpenJS community  
        - ES 6, 7, 8,9,10 (under development) and ES 11 will ve EsNext
            - ES 6 is foundation   
        - React.js is purely based on ES 6, Vue.js, Ember, Express, on Front-End
        - Node.js and its Object Model (aka Libraries and Frameworks for Node.js)    
            - JavaScript Open Stack or JavaScript FullStack
    - Dart
        - Language by Google
        - Mainly used for Component / PlugIns         

- Programming Features of ES 6
    - Declartion Scope
    - Immutable String Objects using template strings
    - Iterattions for Arrays
    - New Array Methods for Iterations
    - New Collections for Hash and Dictionaries (Only in ES 6 by default)
    - Object Immutation using rest parameters
    - Callback Ease using Arrow Operators
    - Elimination if Callback hell using Promises
    - Object Oriented Programming (OOPs)
    - Asynchronous Programming ease using async / await
    - Custom Iterators for sequesncial Data Structures
    - Generators for Self Iterating Collections
    - Proxies and Reflection (enhancing the actual object by hiding it for direct access from client but providing custom behavior for the object)
    - Modules
    - Decorators (Only implemented using TypeScript it is not officielly listed by ES 6) 

- Application Development with ES 6
    - ES 6 Code (high-level-code) --- Transpiler --- Ganarate Browser Compatible JavaScript Code

- ES 6, ES 2015 Library
- ES 7, ES 2016
- ES 8, ES 2017
- ES 9, ES 2018 (Production)
- ES 10, ES 2019
- ESNext, ES 2020
# Programming with ES 6

- ES 6 Application Comfiguration
    - create a package.json file
        - The Application Cofiguration file for ES 6
        - Use the folowing command to create package.json
            - npm init -y 
        - This file will have folloiwng important sections
            - name, the name of the package
            - version, the version of the package
            - scripts
                - the object taht contains commands for following operations
                    - 'start', load, build and execute the the package
                        - the command is, npm run start OR npm start
                    - 'test', runt the test file for the package
                        - npm run test OR npm test
                - custom commands
                    - build, npm run build        
            - dependencies
                - the section to contains all packages installed for the current applicaiton to run the application on production server   
                    - npm install --save <PACKAGE-NAME>
            - devDependencies
                - the section to contains all packages installed for the current applicaiton during the depelopment of the the application
                    - npm install --save-dev <PACKAGE-NAME>
        - Some of the packages are required at application level as well as at global level (aka machine level)
            - npm install -g <PACKAGE-NAME> (for windows command prompt)   OR sudo npm install -g <PACKAGE-NAME> (for linux or mac terminal)                       

- Impoprtant packages
    - @babel/core
        - A Transpiler for ES 6
        - Object Model for the Transpilation
            - Generates the ES 5 or ES 3 code for ES 6 High-Levrl code
    - @babel/cli
        - COmmand line interface that loads the @babel/core whrn Command line transpilation is executed
    - npm install -g @babel/core @babel/cli
    - @babel/preset-env, the application level env. settings for supporting the ES 6 syntax and semantics for the applciation     
    - babel-preset-es2015 with version 6.24.1 

- to eliminate the code warnings for ES 6 in editor add the new file in project and name it as '.jshintrc' , the JavaSAcript Hint Resource file, it is a code quality settings file

``` javascript
{
    "esversion": 8
}
```
- to support the ES compilation for babel add a new file in the project and name it as '.babelrc', Bable Transpilation Resource COnfiguration file. This file will define the environment configuration or the ES 6 code

``` javascript
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

- transpile the code from comand line or terminal window

babel <SOURCE-FILE>.js -o <TARGET-FILE>.js




# Programming with ES 6 Practically

- Variable declation scope in a block using 'let' keyword
    - Fundamental bu most powerful feasture of ES 6 
    - This prevents the Dirty Read and Dirty Write of values
    - Avoid using 'var' because var is function scope and this may result into dirty read and dirty write
- String Object improvisation
    - The search() method that can be used instead of indexOf()
    - The 'Template String' aka 'String Interpolation'
        - HTML Parsing of the STring Object to create single Immutable (never dying) object
        - String obejct with an integration of Variable Expressions using Parser
        - Syntax
            - `The Name is ${fname} ${mname} ${lname}`;
                - a Single String Object that concist of fname, mname and lname variable expressions concatinated to build a single string object 
- Array Improvements
    - Support for Iterators using for..of loop
    - Iterator Metods
        - forEach()
        - map()
        - filter(), to iterate and return records conditionally
        - find(), search for  first match
    - All iterator methods accepts callback function in ES 6, to simplify the syntax for callback function, replace alternating syntax known as 'Arrow Operator'. 
    - If a methods accepts callback function as input parameter then it can be replaced by Arrow Operaor
    - Array.forEach() Vs Array.map()
        - forEach() callback,  cannot modify the array and return value from it
        - map() callback, can modify the records from array and return it      
                               

# Hands-on-Labs
Date : 12-04-2021
1. Create an array of objects that will store records of products in ad-hoc manner. This means that there might be duplicate records for produtcs available. Now implement a UI application HTML that will provide the product details to the End-User based on actions taken by end-use on UI as follows
    - When End-User clicks on LoadAll button all records must be displayed in Table
    - When End-User clicks on RemoveDuplicate button, the the table should show all unique records
    - About the table display textbox where an end-user will enter some data 
    e.g. PrductName,CategoryName, Price,Manufacturer etc. Now when end-user clicks on ShowProductsBasedOnFilterKey button then the table must show only matched data based on filter key enterd in textbox
    - End-User must be provided the facility of grouping the records based on CategoryName or Manufacturer     
 Note: Use ES 6 Array methods of your choice   