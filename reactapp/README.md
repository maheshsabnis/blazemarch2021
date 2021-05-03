# Creating React App
- install React CLI
    - npm install -g create-react-app
- Create a React Application
    - create-react-app <APPLICATION-NAME>
        - Note: if you want the folder name from which you are running  the CLI tool as nae of the React Application then do not provide APPLICATION-NAME instead run the following command
            - create-react-app .
# React.js Object Model
    - react
        - The React library that contains clases and properties for
            - Creating Components
                - Class Component 
                    - Component<P,S>
                        - setState()
                        - forceUpdate()
                        - Lifecycle Hook Methods
                            - componentShouldUpdate()
                                - shouldComponentUpdate()
                            - render()
                            - componentDidCache()
                                - 16.0+
                            - componentDidUpdate()
                            - componentDidMount()
                            - componentWillUnMount()
                - Functional Components
                    - From React 16.8+ used in Production
                - React Hooks
                    - New Standard of managing following in Functional Components
                        - State
                        - Mounting Component
                        - nMounting Component    
            - Standard Components
                - Fragment
                - PureComponent
            - This package also contains the JSX Parser
                - The JSX have define the Developer Friendly HTML element system which will be compiled into HTML Element system afterb succeeful compilation                                
    - react-dom
        - Object Model used to manage the Rendering of the React using Virtual DOM in the browser on UI Thread
- React CLI Packages
    - react-scripts
        - React CLI Object used for followig
            - Creating Build
                - Dev. Build
                - Prod. Build
            - Run the Application in Dev. Mode with Dev. build
                - react-scripts start command
            - Uses the Testing Libraries for execuing UNit Test for the React Applicaiton
                -  "@testing-library/jest-dom": "^5.11.4",
                    - Jest is the Browser Less Unit Testing for JavaScript Apps
                - "@testing-library/react": "^11.1.0",
                    - Bridge between React and Testing Adapter 
                - "@testing-library/user-event": "^12.1.10",                                
                    - Testing the User Evemts executed in DOM
                        - e.g. click, change, keyup, etc. 

# React Important Information
    - Version 16, have started adding breaking changes in React as Finctional Components
        - React 16.8
            - Suggested the community to use Functional Components with React-Hooks to design and develope Production Apps
        - Future HChanges with Reac6 16.8+ (.9 till 17.x)
            - New Hooks for Propgramming (SOme of them may be changed or deprecated) 
        - React 16.0 have provded following changes in Class Components for Productsion
            - Creating Higher-Order-Comppnent (HoC)
            - Error Boundries
                - Exsception Handling for HTML in browser
            - Profilers
                - The Use of React Profiles in Browser
            - Code-Splitting
                - ES 6 Modules            

# Programming with React

1. Class Components (Phase 1)
    - Component
        - The Component Class must be in Pascal Case
        - Autonomous Object that contains following
            - HTML UI, the UI of the Component
            - Properties aka Data STorage for the UI Rendering
            - Events, used to define the behavior of the component
            - The Component can be used as 'CUSTOM HTML DOM ELEMENT' for Re-usability as Reusable UI elements
        - Two Types of Components     
            - Creating Stateless Components
                - The component that does not have any Data to be shown
                - This just have HTML for Static Display e.g. Header, Footer, etc.
            - Creating Statefull Components
                - UnControlled Component (Deprecated)
                - Controlled COmponent
                    - The Component that has data based on which HTML will be rendered
        - The File Extension for COmponent is .jsx
            - The XML Rule BAsed Parser for Compiling the HTML
        - The 'Component<P,S>' Base class     
            - P is 'props', the standard object, that is used to communicate data across components those are having parent-child relationships            
                - Send data from Parent to Child
                - the MessageComponet is child of RenctDOM.render()
                    - the 'message' is passed to the 'msg' attrbute of MessageComponent
                        - React Object model will add the 'msg' attribute as 'props' object property in a React's object model and hence the 'props' becomes an  'immutable' object that will be  live across components till the React app is executing in browser. 
                        - In the child component the value from 'props' will be read as 'this.props.<PROPERTY>' e.g. this.props.msg
``` javascript
   ReactDOM.render(
  <React.StrictMode>
    <MessageComponent msg={message}/>
  </React.StrictMode>,
  document.getElementById('root')
); 
```

The Message Component
``` javascript
import React,{Component} from 'react';

class MessageComponent extends Component {

    render(){
        return(
            <div className="container">
                 <h2>The State Full Component</h2>
                 <div className="form-group">
                     <strong>
                         Value Received from the Parent is = 
                         <hr/>
                         {this.props.msg}
                         <hr/>
                         {this.props.msg1}
                     </strong>
                 </div>
                 <hr/>
                 <MyChildComponent></MyChildComponent>
            </div>
        );
    }
}

 


export default MessageComponent;
```
                - Thninking UseCases where the re-usability of the component is implemented
                    - If the Similar UI with similar behavior is required across multiple components then create a react compoment that will generate UI and will have the behavior based on the data passed to it from its parent  
                - EMitting Data from Child to Parent
            - S is the 'state' object of the component. This is used to define the data that is locally used within the component
                - this.state={};
                    - This state will be used for the life of the current component. Once the component is unloaded the state will be removed.
                    - The State Object (this.state={}) is declared inside the constructor
                - The state properties of the prmitive types must be bind with HTML elements using the attribute those are responsible to read/write data e.g. the 'value' attribute of input text element  
                    - The state property binding with interactive / editable /input elemnts will make the element as read only, this is UniDirectnal DataBinding (From State to UI)  
                    - TO update the State Property by entering data in HTML element and hence mutating the state property means change old state value with new state value subscribe to the event of the element which will update the state.
                        - eg. for <input> element subscribe to the 'onChange' event
                    - Once a method is bound to an event of HTML element, in the method write the code for updating the state    . Again this is UniDirectional binding (From UI to State based in Event)
                        - The State is updated using 'setState()' method of the COmponent class
                            - this.setState({<STATE-PROPERTY>: <THE-NEW-VALUE>},()=>{});

            - Mandatory method  of the component that must be implemented
                - The render()
                    - The method that is used to return HTML DOM so that it will be displayed on Browser when the compoent is mounted on the Browser using ReactDOM.render() method
``` javascript
import React, { Component } from 'react';

class BasicCalculatorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            num1:0,
            num2:0,
            res:0
        };
    }

    // handlers for changing the input elements to mutate states
    handleNum1Change(evt){
        this.setState({num1:parseInt(evt.target.value)});
    }
    handleNum2Change(evt){
        this.setState({num2:parseInt(evt.target.value)});
    }

    clear(){
        this.setState({num1:0});
        this.setState({num2:0});
        this.setState({res:0});
    }

    add(){
        let result = this.state.num1 + this.state.num2;
        this.setState({res:result});
    }
    render() { 
        return ( 
            <div className="container">
                <div className="form-group">
                    <label>Num1</label>
                    <input type="text" className="form-control"
                     value={this.state.num1} onChange={this.handleNum1Change.bind(this)}/>
                </div>
                <div className="form-group">
                    <label>Num2</label>
                    <input type="text" className="form-control"
                    value={this.state.num2} onChange={this.handleNum2Change.bind(this)}/>
                </div>
                <div className="form-group">
                    <label>Result</label>
                    <input type="text" className="form-control"
                    value={this.state.res} readOnly/>
                </div>
                <div className="form-group">
                   <input type="buttont" className="btn btn-primary" value="clear"
                    onClick={this.clear.bind(this)}/>
                   <input type="buttont" className="btn btn-success" value="add"
                     onClick={this.add.bind(this)}/>
                </div>
            </div>
         );
    }
}
 
export default BasicCalculatorComponent;

```

    - Communication Across Components
Parent Component
``` javascript
import React, { Component } from 'react'
import DropDownComponent from './../reusablecomponents/dropdowncomponent';
class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ProductId:'',
            ProductName:'',
            CategoryName:'',
            Manufacturer:'',
            BasePrice:0,
            Categories: ["Electronics", "Electrical", "Food"],
            Manufacturers: ["TATA","BAJAJ","HP"]
         };
    }

    handleChange(evt){
        // the callback is used because that state is mutated using the <select><option> change evebt
        // this is multi-Step event. The <option> will change then the selected option's valie will 
        // be passed to value of the <select> element. This will delayed the setState and hence the state
        // property mutation, hence we need callnack as second parameter 
        this.setState({[evt.target.name]:evt.target.value},()=>{
            console.log(`Category Name ${this.state.CategoryName}`);
            console.log(`Manufacturer Name ${this.state.Manufacturer}`);
        });
    }

    getSelectedCategory(val){
        this.setState({CategoryName:val},()=>{});
    }
    getSelectedManufacturer(val){
        this.setState({Manufacturer:val},()=>{});
    }

    render() { 
        return (  
            <div className="container">
                <div className="form-group">
                    <label>Categories</label>
                    {/* Generating theSelect options based on state*/}
                    <select className="form-Control" name="CategoryName" value={this.state.CategoryName}
                     onChange={this.handleChange.bind(this)}>
                        {
                             this.state.Categories.map((cat,idx)=>(
                                 <option key={idx} value={cat}>{cat}</option>
                             ))   
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Manufacturer</label>
                    <select className="form-Control" name="Manufacturer" value={this.state.Manufacturer}
                     onChange={this.handleChange.bind(this)}>
                    {
                             this.state.Manufacturers.map((man,idx)=>(
                                 <option key={idx} value={man}>{man}</option>
                             ))   
                        }
                    </select>
                </div>
                <hr/>
                <div className="container">
                    <label>Reusable Categories</label>
                    {/* stateProperty: is the 'state' property of the parent component passed to child component. So that the selected value from child component will update the state property i.e. CategoryName 
                     dataSource: the property of child component thatb will accept value from state property of the component using which the <options> will be generated in DropDownComponent
                    */}
                    <DropDownComponent
                     stateProperty={this.state.CategoryName}
                     dataSource={this.state.Categories}
                     selectedValue ={this.getSelectedCategory.bind(this)}
                    ></DropDownComponent>        
                    <br/>
                    selected Category {this.state.CategoryName}

                </div>
                <hr/>
                <div className="container">
                    <label>Reusable Categories</label>
                    <DropDownComponent
                     stateProperty={this.state.Manufacturer}
                     dataSource={this.state.Manufacturers}
                     selectedValue ={this.getSelectedManufacturer.bind(this)}
                    ></DropDownComponent>       
                    <br/>
                    selected Manufacturer {this.state.Manufacturer}
 
                </div>
            </div>
        );
    }
}
 
export default ProductComponent;
```

Child COmponent

``` javascript
import React, { Component } from 'react'


class DropDownComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    handleChange(evt){
        // props function object 
        // this is having in input parameter as
        // selected option value 'evt.target.value'
        // the parent component will subscribe to this event
        // using the function from the parent component
        this.props.selectedValue(evt.target.value);
    }


    render() { 
        return (  
             <select value={this.props.stateProperty} className="form-control"
              onChange={this.handleChange.bind(this)}>
                 {
                     this.props.dataSource.map((opt,idx)=>(
                         <option key={idx} value={opt}>{opt}</option>
                     ))
                 }
             </select>
        );
    }
}
 
export default DropDownComponent;
```


    - Component's Lifecycle
        - Component's Mount and UnMount
        - Handling Memory Leaks
        - Accessing External Service in React Apps   
    - Using External CSS in COmponent e.g. Bootstrap
        - npm install --save bootstrap
        - Imports the CSS from the CSS library / Framework in index.js e.g.
            - import './node_modules/....../XXXX.css'      
2. React with Functional Components (Phase 2)
    - Using Standard Hooks
    - Creating Custom Hooks
    - Mamory Leaks handling using Hooks
    - React Routing          
3. React with Redux (Phase 3)
    - Creating Redux App for State Managemenent
    - Using Middlewares for Async Calls Management usign Redux Apps
4. Testing of React Apps (Phase 4)
    - Component's Rendeing Testing using Data
    - Component's Event Dispatch Testing    
5. Using Server-Side Rendering for React using Next.js (Phase 5)    

# Running the React Application
    - npm run start
        - react-scripts start
            - Discover all files starts from index.js with all its depednencies
                - react and react-dom
                - index.css
                - App.js
                    - App.css
                    - logo.svg
            - build.js
                - Web Pack Build for Module Loaders for React app and its depednecies
                    - CSS Loaders and Style Loaders for parsing all CSS files in the application
                    - Babel Loader COnfoguration for Transpiling the React's ES6+ code in the JavaScriptso that it will be delivered to the browser   
            - main-chunk.js
                - The Developer's application Code which is transpiled and loaded in browser so that the app will be loaded in the browser
                    - Component's JS + CSS + Other JS files
                        - Other JS files, are the additional logic files e.g. array / string utilities, DateTime OPerations, HTTP Calls
            - vendor~main.chunk.js       
                - Transpilation for react and react-dom packages
                - Standard Component's lifecycle for Coamponent management (loading / Virtual DOM / Props and State anagement / Event handling)       

# Hands-on-Labs
Date:03-May-2021
1. Create Calculator using React that looks like Calculator on Windows OS with Scientific Calculator Suport e.g. Sig/Cos/Tan/Power/Sqrt/Fibo, ect
2. Create a Master Component that will show a comboboxes with list of Categories and List of Manufactirers. There must be a Table Chaild component which will be generated based on Products Array with properties as ProductRowId, ProductId,ProductName,CategoreyName, Manufacturer, BasePrice, ect. When a Categorey is selected from Category Combobox the table shold show products matching with categories ans same bechavior for the Manufacturers Combobox 