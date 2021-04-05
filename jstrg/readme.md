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
    -  keep implementing the modularity(?) in the JS FullStack apps
        -  Modularity is an approach of saggrigating the code in seperate JS Files
        -  Modularity is an approach of creating reusable objects(?) 
            - Reusable object are
                - JSON Data Objects
                - Functions
                    - ref. functions
                    - close type functions
                    - Implicitely Invocable Function Expressions (IIFE)
2. Using JavaScript Object Model    
    - variables
        - The 'var' keyword is used to declare a variable
        - The 'var' can not specify the type of the variable out of the box
        - The type will be decided based on the initial value if any
        - The 'var' declaration is scopped to function by default. The variable will be accessible throuhout the function
        - The 'var' may result into 'dirty read and write' so to prevent it, always check for undefined value for the var declared variable
        - The  'var' can have any type of data stored in it
            - number, string, boolean, object (JSON, array, date, function) 

    - In JavaScript evenrthing is 'object' (high level type)    
        - The 'object' is responsible for providing following to the declaration
            - properties
            - methods 
        - Number Object
        - String Object
        - Array Object
            - The Most imporant JavaScript Data Structure
            - The only collection for stroing data in browser
            - The 'Array' is a default type for  [] declarations
            - This collection can be dynamically increased by pushing values on the tope (right-side)  
            - sort () and reverse() methods
                - by default based on strings
        - Date Object
            - Purely Browser dependeant
            - Managed by the OS by default and not the server date 
            - JavaScript Long Date Formats
                - MMM DD YYYY
                - DD MMM YYYY
                - <MONTH-NAME> DD YYYY
                    - April 05 2021 
        - Math Object    
            - Object used for Calculations (numeric and scientific) on client
    - types
        - The '+' operator is overloaded by default for string concatination
        - All numeric values stored in variables will be concatinated
        - To perform numeric add, parse values as integer
            - parseInt()
            - parseFloat()
        - toString()     
    - assignments
        - For copying schema and of one object to other objectb use 'Object' class
    - objects
        - array
        - string
            - index of string (hence an array) starts from 0
            - property
                - length
            - methods
                - indexOf() / lastIndexOf()
                - toUpperCase() / toLowerCase()
                - slice()
                - substring()    

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

# Date 01-04-2021
- USe a following string to display it on HTML page

"The James Bond series focuses on a fictional British Secret Service agent created in 1953 by writer Ian Fleming, who featured him in twelve novels and two short-story collections. Since Fleming's death in 1964, eight other authors have written authorised Bond novels or novelisations: Kingsley Amis, Christopher Wood, John Gardner, Raymond Benson, Sebastian Faulks, Jeffery Deaver, William Boyd and Anthony Horowitz. The latest novel is Forever and a Day by Anthony Horowitz, published in May 2018. Additionally Charlie Higson wrote a series on a young James Bond, and Kate Westbrook wrote three novels based on the diaries of a recurring series character, Moneypenny.

The character—also known by the code number 007 (pronounced "double-O-seven")—has also been adapted for television, radio, comic strip, video games and film. The films are the longest continually running film series of all time and have grossed over US$7.04 billion in total, making it the sixth-highest-grossing film series to date, which started in 1962 with Dr. No, starring Sean Connery as Bond. As of 2021, there have been twenty-four films in the Eon Productions series. The most recent Bond film, Spectre (2015), stars Daniel Craig in his fourth portrayal of Bond; he is the sixth actor to play Bond in the Eon series. There have also been two independent productions of Bond films: Casino Royale (a 1967 spoof starring David Niven) and Never Say Never Again (a 1983 remake of an earlier Eon-produced film, 1965's Thunderball, both starring Connery). In 2015 the series was estimated to be worth $19.9 billion,[1] making James Bond one of the highest-grossing media franchises of all time."

Perform the following operations on the string using UI Events (button events) 

- Have a textBox on the UI
- The Button 'Count', when this button is clicked, diplay the count of word entered in textbox that occures in string. E.g. If you enter 'the' in textbox then on clicking on 'Count' button, dipslay number of times 'the' occures in string
    - SHow index on which the entered word occures

- The 'Vowels', when this button is clicked, dipslay number (or count) of Vowels in string
    - SHow index on which Vowel occures

- The 'Statement' button, when this button is clicked display count of statements in the string

- The 'TitleCase' button, when this button is clicked, display the string converted into title case

- The 'Reverse' button, when this button is clicked, reverse each word of the string

- The 'FindNumber' button, when this button is clicked display numeric values and their indexes on page

# Date : 05-April-2021
 Application Development Assignment w/o using third party library

- Ex 1 : Create function that will accept two date parameters and the function will perform the following operations
    - Check is First Parameters Date is greater than Second Parameter Date
    - Findout the DIfference between date based of
        - Seconds
            - if differencfe is more than 60, then add 1 min and rest are seconds
        - Minuts
            - if difference is more than 60, then add 1 hour an rest are minuts
        - Hours
            - if difference is more than 24, then add 1 Day and rest are hours
        - Days
            - if difference is more than 28,30,31, then add 1 month and rest are days
        - Months
            - - if difference is more than 12, then add 1 year and rest are months
        - Years
    - e.g.
        - D1 : 1980, 00, 01, 01:30:20 , 01-Jan-1980
        - D2 : 1981, 11, 31, 01:40:20 , 31-Dec-1981
            - 2 Years 20 mins

- Ex 2 : Sort the string array based on length of each string in array
    - ["ABC", "AA", "BAD", "BADA", "CARD", "BADARAE"]
        - ["AA", "ABC", "BAD", "BADA", "CARD", "BADARAE"]

- Ex 3 : Create a function that will accept an array as input parameter and the function will returns a new array as the new array where 0th index elements will take 1st index element as its power, likewise 1st element will take 2n element as its power (use pow() function of Math object)

- Ex 4 : write a function to convert the date in descriptive manner, e.g. if the input date is 05-04-2021, then the output should be Monday, 5th April, 2021
    - An Array for Days (Monday to Sunday), then using getDay() function get the index of day and then for the index reteriev day from array and then generate output
- Ex 5: Explore indexOf() and lastIndexOf() methods of array    


