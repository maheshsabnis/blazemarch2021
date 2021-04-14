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
- CReating a Data Structure for preventing the repeated value to be stored in collection. These new collections are iteratable

    - Set() and WeakSet()
        - Set() used to Store Primptive Types
            - number, string
        - Set() can also store objects 
    - Set Methods
        - add(), to add new entry
        - delete(), to remove entry
        - has() to check entries
        - keys() , to listb keys
        - values(), to list values
        - entries(), to iterate over all entries
        - nfoprEach(), toiterate over set
    - Set Properties
        - size, to read max size of the set        
        - WeakSet()
            - Object or reference types only
    - WeakSet
        - Keys can obly be Objects (no primptive types)
        - this data structure does not have following methods
            - keys(), values()
            - size propertyn also does not exist
    - Map()
        - Key / Value pair of DataStructure line dictionary 
        - Key will always be premptive type
            - number or string    
        - set(), get(), size, entries(), values(), keys(), forEach(), clear(), delete(), has()        
        - Map will have keys as unique (like primary key), the previous value of the same keykey will be overwritten 
    - WeakMap()
        - Like Map() but the Key is Object                                          
- Object Oriented Programming (OOPs)
    - 'this' object
    - The class is decalred using 'class' keyword and all public data members ,must be prefixed with  'this.'
    - the constructor() is a standard method 
    - constructor() overloading is not allowed
    - all methods are 'public' by default
    - class level declaration of data members is not allowed
    - the default support for private is not available
        - Babel Plug-In for Private
            - @babel/plugin-proposal-private-methods
            - the private declaration is provided using #
    - get/set proeprty support       
        -  - Babel Plug-In for properties
            - @babel/plugin-proposal-class-properties
    - Inheritence
        - The 'extends' keyword
        - If the derived class has the ctor then the 'super()' method is required to acces base class ctor
        - Derive class has an access to all publc members of base class        
- npm install --save-dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods

- modify the .babelrc
    - "plugins":[
        "@babel/plugin-proposal-private-methods",
        " @babel/plugin-proposal-class-properties"
    ]          

- Using Object Spread as spread operator for passing infine parametrers to method
    - use the spread operator to manage the object updates in immutable object
        - ...obj
    - USe spread to pass infinite no. of parameters to method            
# Hands-on-Labs
Date : 12-04-2021
1. Create an array of objects that will store records of products in ad-hoc manner. This means that there might be duplicate records for produtcs available. Now implement a UI application HTML that will provide the product details to the End-User based on actions taken by end-use on UI as follows
    - When End-User clicks on LoadAll button all records must be displayed in Table
    - When End-User clicks on RemoveDuplicate button, the the table should show all unique records
    - About the table display textbox where an end-user will enter some data 
    e.g. PrductName,CategoryName, Price,Manufacturer etc. Now when end-user clicks on ShowProductsBasedOnFilterKey button then the table must show only matched data based on filter key enterd in textbox
    - End-User must be provided the facility of grouping the records based on CategoryName or Manufacturer     
 Note: Use ES 6 Array methods of your choice   

 # Date: 14-04-2021

 1. Use the Map to store the One-to-Many relationship data e.g. Categories and Products. This data must be acepted from UI. When the data is accepted for Category and Products from UI, make sure that if the Category Already Exists do not acept it again and throw error for the same. If the Product is already present in that category then make sure that the product is not accepted. Make sure that there are two tables one each for Category and Product.  When the User selects the Row from Category Table, the Product table should show only products for the category. IMP. You must use the same Map() for storing Category-Products data.   