# HTML 5 UI Elements

1. Input Elements (<input> elements with inline CSS and JavaScript)
    - date
    - time
    - email
    - color
    - month
    - week
    - number
2. Form Elements
    - datalist
        - A simplified 'select' element creation

# HTML 5 API Programming

1. Storage Services
    - Use the Storage for Line-Of-Business Application where the data to be managed locally for processing before sending data to external server
    - Browser Storage
        - localStorage
            - data will be stored in browser using Key/Value pair
            - this is 'non-volatile' data store for the same page loaded again and again
                - number of times the same page is loaded from same web site the localStorage will show the data 
            - typically used to store data for processing on the page
            - Once the page is closed the data must be cleared explicitely     
            - methods
                - localStorage.setItem() / getItem() / clear()/ keys() etc.
            - properties
                - length    
        - sessionStorage
            - data will be stored in browser using Key/Value pair
            - the data will be removed when the page is closed or unloaded
            - typically used to store data for processing on the page
            - methods
                - sessionStorage.set() / get() / clear(), etc.
        - indexedDB
            - Tabular form of database
            - Create a Database in browser
                - IDBDatabase
                    - Represent the Database Connection
                    - Transactions will be performed only when conneciton is established
                    - This uses IDBEnvironment and IDBFactory interfaces internally
                - IDBEnvironment
                    - Provides an access to IndexedDB using window object
                - IDBFactory
                    - Provides acced to database to the application   
                - IDBOpenRequest
                    - Request the Database to be opened for 
                        - creating ObjectStore
                            - Performing CRUD operations
                    - All these are Async Operations e.g. Creating the Database, ObjectStore and Transactions
                        - Events
                            - onsuccess
                            - onerror
                            - oncomplete
                - IDBCursor
                    - Iterate over all records in ObjectStore
                - IDBTransaction
                    - Monitor and Manage all transactions on ObjectStore
                        - add() , put(), delete(), opencursor()                              
2. Drag-Drop
    - Dynmaic UI Updates in DOM / Browser
    - Mouse Events linked with Drag-Drop Operations
        - dragstart
            - An event that will attach the DOM element with Mouse LeftButton Down event
            - Will detach the DOM element from DOM Tree and make it ready for movement
            - This event accept the 'DragEvent' as input parameter, this provides an access to the 'dataTransfer' object that contains the metadata of the element to be dragged
        - dragover
            - Control the Mouse Movements with LeftButton Down and DOM element attach to across all its movements on browser      
                - prevent any other operations on browser
                    - preventDefault()
        - drop
            - Capture Mouse LeftButton Release event and release DOM element from it and show (or append) at new position on browser   
            - This event accept the 'DragEvent' object, that will use the 'dataTransfer' object to receive the dragged element's data   
    - To make an element enable for drag-drop, set its 'draggable' attriobute to 'true'        
3. Media Services


# Date 07-April-2021
1. Create a Data Entry Application for storing Product Information. The Data for the Product will be captured as follows
    - ProductId, string
    - ProductName, string
    - CategoryName, string, but can be from 'ECT','ECL','FOD-FAST', 'FOD-DRK' 
    - Manufacturer, string, but can be from 'HP','IBM','TATA','BAJAJ','PARLE'
    - Description, string
    - Price, string
- The data must be stored in the locatsorage as Key Value pair, wher the Key will be ProductRowId which will be automatically generated when the new product is saved. Make sure that the values of string type for Product are must, the numeric values cannot be -Ve
- Make sure that the ProductId is not repeated, (check this against the localhosrage)
- If the enduser want gto delete the product from localStorage, make sure that is is present
- When the Product is saved it must be displayed in the dynaically generated table
- Provide a search feature for Product based on ProductName, CategoryName or Description on the page
- Create a Radio-Button list for Categories and Manufactirers 
    - Input type="radio", same name of arr radio button


# Managing the UI and UX
1. Fluid User Interface and Experience
2. Developers Vs Designers
    - Developers, develop app with
        - Logic
        - Events
        - Data
        - Behavior
    - Designer, develop the App UI with
        - Colors
        - Dimensions
        - Animations
        - Layouting    
3. Guideline for Integration or Association between Designers and Developers
    - HTML 5
        - Inline CSS and Inline JavaScript
    - CSS 3 Property System (W3C)
        - Dimensions
            - Height, width, etc.
        - Look and Feel
            - Background-color, color
        - Fonts and Text
            - font-size, font-weight, fomt-familiy, etc.
            - Font Colors for Text
            - Text Fluid Properties e.g. Alignment
                - Transformation
                - Spacing
                - Shadow 
        - Layout
        - Fluid UI
            - Overflow
                - Set the Max height and width for the element and apply the scross for the element
            - Float
                - Text + Image alignment
            - Alignment
        - Forms    
    - CSS Advanced Porperties (W3C)
        - 2D, 3D Transformationa
        - Effects
        - Columns
        - Box
        - Media Queries    
4. CSS 3 Object Models and Libraries
    - Selectors
        - Tag Selector
            - HTML element will be applied with styles based on its tag
                - internally it is document.getElementsByTagName()
            - Styles will be applied on more than one element
        - Class selctor
            - The Style will be applied based on 'class' attribute of the element
                - internally it document.getElementsByClass()
        - Index Based Iterations
            - Apply Styles based on position of elements
            - Apply Styles based on Attribute values of elements
            - Apply Styles based on the element  index in the collection           

    - Classes
    - Styles
    - Libraries
        - Bootstrap
        - Flexbox
5. CSS 3 Programming
    - Using CSS 3 Selectors for Enhancing JavaScript

    - Using CSS 3 for defining classes and applying Styles 

# Date 08-April-2021

Create a HTML Page that will show a Table that contains the Products Information with products properties give in Exercise of Dat 07-Apri-2021.

The End-Use will be able to drag the row from the table of Product information and drop it in the table of Product Cart table. THe moment the row is dropped the Product Cart table must show the total proce of the selected products and the selected products information must be stored in IndexedDB. The enduser may remove the selected product from the Product Cart table and hence it will be removed from the IndexedDB also. When the End-User finally click on buttopn of Purchase the indexedDB must create an objectStore in name  'Bill' where the Bill No will be generated along with the Total bill. (Means the IdnexedDB will have 2 object stored ne for Purchased Products and other for the TotalBill)  

# Date 01-April-2021
1. Change the Background-COlor, Foreground color and font of Table Row based on MouseEnter ever, the table-row should retain its original style when mouse left from it

2. In the tabel showing list of Employees use following styles to show employeed from different department in differt colors
    - e.g. IT --> RED
           HR --> Yellow
           ACCOUNTS --> Black
           SALES --> Cyan 


