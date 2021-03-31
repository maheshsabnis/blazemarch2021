# Programming with JavaScript

1. JavaScript Object 
    - window and document objects
        - HTML DOM
        - Events
        - Properties
    - window object
        - represents the current browser instance
            - provides an access to
                - Browser's DOM
                    - Provided using the 'document' object
                    - The 'document' object have the HTMLElement system in it
                        - input elements
                            - text, radio, checkbox, textarea, password
                        - select elements
                            - select, list (ul and ol)
                        - layout elements
                            - table, div, paragraph (p)
                    - property system for HTML elements
                        - Provide a mechanism to set behavior for HTML elements (attaching events)
                        - Data Read/Write operations
                        - HTML Elements identification properties
                            - The 'id', the unique property for the HTML element inside the DOM Tree
                            - The 'name', the property which can be used to extract element from DOM tree, this can be repeated for multipe HTML elements to set the group (e.g. Radio Button Group)
                        - Event properties
                            - Used to attach a JavaScript function to an event of HTML element
                    - The  'document' object extract an Element from DOM as follows
                        - Extracting an element based on 'id'

``` javascript
                        var element = document.getElementById('ID-OF-AN-ELEMENT');
```
                    - the 'element' is a single object
                        - getElementById()
                            - Single Object from DOM Tree
                        - getElementsByName()
                            - Return array of DOM elements based on the 'name' atribute of ann element
                        - getElementsByTagName()
                            -  Return array of DOM elements based on the  'tagname' e.g <inupt>  
                        - getElementsByClass()
                            -  Return array of DOM elements based on the  'class' property               
                    - Stylesheet inline to the window used for Look and feel
                        - CSS
                - JavaScript Object Model
                    - Uses the 'document' object to query the DOM for
                        - read / write data from and to HTML Elements
                        - attach events
                        - setting properties dynamically 
                - Browser's APIs (HTML 5)
                    - Browser's Storage
                    - Media Services 
                    - File Access
                    - Sensors
            - manage the lifecycle of DOM loaded in the browser    
2. Using JavaScript Object Model    
    - variables
        - The 'var' keyword is used to declare a variable
        - The 'var' can not specify the type of the variable out of the box
        - The type will be decided based on the initial value if any
    - In JavaScript evenrthing is 'object' (high level type)     
    - types
        - The '+' operator is overloaded by default for string concatination
        - All numeric values stored in variables will be concatinated
        - To perform numeric add, parse values as integer
            - parseInt()
            - parseFloat()
        - toString()     
    - assignments
    - objects
        - array
        - string
        - function
        - boolean
        - date
    - reading values from the Element 
        - The scope of the elements is defined using 'this'   
            - In JavaScript, the 'this' represents the current scope of containing or defining object (?)
                - containing or defining object 
                    - can be function / class / event ettached to the UI element  
                - Using 'this', functions and propertis of the containing or defining object can be accessed    



# Hands-on-Lab
# Date 31-03-2021
- Create a Simple calculator like System caclulator on windows 