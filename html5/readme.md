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
2. Drag-Drop
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

