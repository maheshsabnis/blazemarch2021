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

    - Compositional Pattern Used by React.js
        - A Complex React App is consisting of multiple Components having Parent/Ch9ld Relationships OR Mutipe Components can be having Common Parent (Brothers)
            - If any componenty in composition is collapsed the whole DOM will be collapsed/crashed
            - To Manage the Rendering Errors as well as the unprodictable component crash, use the exception handling mechanism or check for the Lifecycle SUpport for Error Handling 
            - The lifecycle is important because of the following
                - Decide when to subscribe to the events in the component to global object
                - How to inform to the React Object model that the component is unmounted and all events / external subscriptions (e.g. AJAX calls) is released for preveingin the memory leaks.
                - The script will geberate memory leaks  
``` javascript
import React, { Component } from 'react'

class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            value:0
        };
        
    }
    updateValue=(evt)=>{
        this.setState({value:parseInt(evt.target.value)});
    }
    render() { 
        if(this.state.value % 2 ===0){
            return(
                <div className="contaier">
                    <h1>The Parent Component</h1>
                    <input type="text" value={this.state.value}
                     onChange={this.updateValue.bind(this)}/>
                     <strong>Showing Even Component</strong>
                     <EvenComponent></EvenComponent>
                </div>
            );
        } else {
        return (  
            <div className="contaier">
                 <div className="contaier">
                    <h1>The Parent Component</h1>
                    <input type="text" value={this.state.value}
                     onChange={this.updateValue.bind(this)}/>
                      <strong>Showing Odd Component</strong>
                     <OddComponent data={this.state.value}></OddComponent>
                </div>
            </div>
        );
     }
    }
}


class EvenComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            x:0,
            y:0
        };
        // subscribing the event for global object (window) object
        // ins constructor
        // this will generate runtime Warnings for BUGS because the
        // constrctorm only executes the COmponent intialization bu the
        // component mounting(?) is still  not completed 
        window.addEventListener('mousemove', this.getMousePositions);
    }

    getMousePositions=(evt)=>{
        this.setState({x:evt.clientX});
        this.setState({y:evt.clientY});
        console.log(`Mouse Move x=${this.state.x} && y=${this.state.y}`);
    }

    render(){
       return( <div className="container">
            <strong>
                x = {this.state.x} and y = {this.state.y}
            </strong>
        </div>); 
    }
}

class OddComponent extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container">
                <strong>
                    Value Received from Parent = {this.props.data}
                </strong>
            </div>
        );
    }
}
 
export default LifecycleComponent;
```
            - Component's Lifecycle
                - Component's Mount and UnMount
                    - in componentDidMount() do the following
                        - Subscribe to events
                        - Subscribe to promises for extetrnal calls
                            - Accessing External Service in React Apps  
                                - use the axios package
                                    - the promise based libray recommended by React community for managing External HTTP Calls
``` javascript
import React, { Component } from 'react'
import TableComponent from './../../reusablecomponents/tablecomponent';
import DepartmentHttpService from './../../../services/departmenthttpservice';
class DepartmentRESTComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            DeptNo:0,
            DeptName:'',
            Location: '',
            Capacity:0,
            Departments:[],
            message:''
        };

        // define instances of external calls after all state properties are initialized
        this.serv = new DepartmentHttpService();
    }

    handleChange=(evt)=>{
        this.setState({[evt.target.name]:evt.target.value});
    }
    clear=()=>{
        this.setState({DeptNo:0});
        this.setState({DeptName:''});
        this.setState({Location:''});
        this.setState({Capacity:0});
    }

    componentDidMount=()=>{
        this.serv.getData().then((response)=>{
            // mutate the state
            this.setState({Departments:response.data.rows},()=>{
                this.setState({message:`Data is Loaded Successfully `});
            });
        }).catch((error)=>{
            this.setState({message:`Error Occured in loading Data ${error}`});
        });
    }

    save=()=>{
        let dept = {
            DeptNo:this.state.DeptNo,
            DeptName:this.state.DeptName,
            Location:this.state.Location,
            Capacity:this.state.Capacity
        };
        this.serv.postData(dept).then((response)=>{
            this.setState({message:`Department is posted successfully`});
        }).catch((error)=>{
            this.setState({message:`Error Occured in loading Data ${error}`});
        });
    }

    render() { 
        return (  
            <div className="container">
                <div className="form-group">
                    <label>DeptNo</label>
                    <input type="text" name="DeptNo" value={this.state.DeptNo} onChange={this.handleChange.bind(this)} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>DeptNmae</label>
                    <input type="text" name="DeptName" value={this.state.DeptName} onChange={this.handleChange.bind(this)}  className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" name="Location" value={this.state.Location} onChange={this.handleChange.bind(this)}  className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Capacity</label>
                    <input type="text" name="Capacity" value={this.state.Capacity} onChange={this.handleChange.bind(this)}  className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="button" value="Clear" className="btn btn-primary"
                     onClick={this.clear.bind(this)}/>
                    <input type="button" value="Save" className="btn btn-success"
                     onClick={this.save.bind(this)}/>
                </div>
                <br/>
                    {this.state.message}
                <hr/>
                <h4>List of Departments</h4>
                {/* {
                    JSON.stringify(this.state.Departments)
                } */}
                <TableComponent dataSource={this.state.Departments}></TableComponent>
            </div>
        );
    }
}
 
export default DepartmentRESTComponent;
```
                    - in componentWillUnMount() do the following
                        - release events
                        - release async / pomise subscriptions this will result in
                             - Handling Memory Leaks    
                        - the following code will provide the Lifecycle by removeing memory leaks    
```  javascript
import React, { Component } from 'react'

class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            value:0
        };
        console.log(`COnstructor of the Parent is executed`);
    }
    updateValue=(evt)=>{
        this.setState({value:parseInt(evt.target.value)});
    }
    componentDidUpdate=()=>{
        console.log(`Compoennt did update on Parent Component is invoked`);
    }
    render() { 
        console.log(`Rendering of Parent Component`);
        if(this.state.value % 2 ===0){
            return(
                <div className="contaier">
                    <h1>The Parent Component</h1>
                    <input type="text" value={this.state.value}
                     onChange={this.updateValue.bind(this)}/>
                     <strong>Showing Even Component</strong>
                     <EvenComponent></EvenComponent>
                </div>
            );
        } else {
        return (  
            <div className="contaier">
                 <div className="contaier">
                    <h1>The Parent Component</h1>
                    <input type="text" value={this.state.value}
                     onChange={this.updateValue.bind(this)}/>
                      <strong>Showing Odd Component</strong>
                     <OddComponent data={this.state.value}></OddComponent>
                </div>
            </div>
        );
     }
    }
}


class EvenComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            x:0,
            y:0
        };

        console.log(`Even Component Constructor called`);

        // subscribing the event for global object (window) object
        // ins constructor
        // this will generate runtime Warnings for BUGS because the
        // constrctorm only executes the COmponent intialization bu the
        // component mounting(?) is still  not completed 
       // window.addEventListener('mousemove', this.getMousePositions);
    }

    componentDidMount=()=>{
        console.log(`Even Component Did Mount`);
        window.addEventListener('mousemove', this.getMousePositions);
    }

    // will be invoked for each state / props changes
    componentDidUpdate=()=>{
       console.log(`Even Component Did Update is invoked`);
    }

    componentWillUnmount=()=>{
        console.log(`Even Component is unmounted`);
        // release all event handlers
        window.removeEventListener('mousemove', this.getMousePositions);
    }
    getMousePositions=(evt)=>{
        this.setState({x:evt.clientX});
        this.setState({y:evt.clientY});
        console.log(`Mouse Move x=${this.state.x} && y=${this.state.y}`);
    }

    render(){
        console.log(`Rendering of Even Component`);
       return( <div className="container">
            <strong>
                x = {this.state.x} and y = {this.state.y}
            </strong>
        </div>); 
    }
}

class OddComponent extends Component {
    constructor(props){
        super(props);
        console.log(`COnstructor of Odd COmponent is invoked`);
    }
    // will be invoked for each state / props changes
    componentDidUpdate=()=>{
        console.log(`Odd Component Did Update is invoked`);
     }

     componentDidMount=()=>{
        console.log(`Odd Component Did Mount`);
        
    }

     componentWillUnmount=()=>{
        console.log(`Odd Component is unmounted`);
    }
    render(){
        console.log(`Render of Odd Component in Invoked`);
        return (
            <div className="container">
                <strong>
                    Value Received from Parent = {this.props.data}
                </strong>
            </div>
        );
    }
}
 
export default LifecycleComponent;
```
                 
                - Handling the Redering Exceptions
                    - hande execptions for all childre using 'componentDidCatch()' hook 
                        - Implementing the componentDidCatch() to handle exceptions in any child cpomponent in teh component tree using a static property named getDerivedStateFromError()
                            - This property will listen the conponent that causes exceptions during rendering and for that component it creates a fallback UI    
``` javascript
import React, { Component } from 'react';

class ErrorBoundryComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage:''
        };
    }

    // this property will be invoked by rendering thread of the component
    // to notify the exception thrown by any child component
    // this property will implicitely set the state of the errorMessage of the current component
    static getDerivedStateFromError(error){
        return {
            errorMessage:error.toString()
        }
    }


    // parameter 1: Error That will be listened by this Component
    // parameter 2: the Error Log that will have an access to stack trace for the component that has thrown error
    // parameter 2 is of the type Exception that has property 'componentStack' which is a stach trace   
    componentDidCatch=(error, logInfo)=>{
        console.log(error.toString(), logInfo.componentStack);
    }
    // render the fallback UI 
    render(){
        if(this.state.errorMessage){
            // return the fallback UI
            return(
                <div className="container">
                     <h3>Some Error is Opccured</h3>
                     <strong>
                         {
                             this.state.errorMessage
                         }
                     </strong>
                </div>
            );
        }
        // oterwise keep rendering children components
        return this.props.children;
    }
}


class MyCounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            counter:0
        };
    }
    increament=()=>{
        this.setState({counter: this.state.counter +1});
       
    }
    render() { 
      
            if(this.state.counter > 10) {
                throw new Error('Counter Has Exceeds its limit');
            } else{
                return (  
                    <div className="container">
                        <strong>
                            The Counter Value = {this.state.counter}
                        </strong>
                        <br/>
                        <input type="button" value="Increaent"
                         onClick={this.increament.bind(this)}/>
                    </div>
                );
            }
    }
}

class ContainerForErrorBoundryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    reload=()=>{
        // reload or refresh the same page
        window.history.go(0);
    }
    render() { 
        return (  
            <div className="container">
                {/* Render all children components inside the context of Error Boundry Component */}
                <ErrorBoundryComponent>
                     <MyCounterComponent></MyCounterComponent>
                </ErrorBoundryComponent>
                <hr/>
                <input type="button" value="Reload"
                 onClick={this.reload.bind(this)}/>
            </div>
        );
    }
}
 
export default ContainerForErrorBoundryComponent;
 



```
            - Working with UI Validations
``` javascript
import React, { Component } from 'react'


class ValidationFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            DeptNo:0,
            DeptName:'',
            isDeptNoValid:true,
            isDeptNameValid:true,
            isFormValid:false
        };

    }

    handleChange=(evt)=>{
        this.setState({[evt.target.name]:evt.target.value});
        this.validateForm(evt.target.name,evt.target.value);
    }

    validateForm=(name,value)=>{
        if(name === "DeptNo"){
            if(parseInt(value) < 0 || value.length > 5){
                this.setState({isDeptNoValid:false});
                this.setState({isFormValid:false});
            } else {
                this.setState({isDeptNoValid:true});
                this.setState({isFormValid:true});
            }
        }
        if(name === "DeptName"){
            if(value.length ===0 || value.length > 20){
                this.setState({isDeptNameValid:false});
                this.setState({isFormValid:false});
            }else {
                this.setState({isDeptNameValid:true});
                this.setState({isFormValid:true});
            }
        }
    }

    save=()=>{
        // 
        
    }
    render() { 
        return (  
            <div className="container">
             <form onSubmit={this.save.bind(this)}>    
                <div className="form-group">
                    <label>DeptNo</label>
                    <input type="text" name="DeptNo" value={this.state.DeptNo} onChange={this.handleChange.bind(this)}  className="form-control"
                     />
                     <div className="alet alert-danger"
                      hidden={this.state.isDeptNoValid}>
                         DeptNo is invalid
                     </div>
                </div>
                <div className="form-group">
                    <label>DeptNmae</label>
                    <input type="text" name="DeptName" value={this.state.DeptName} onChange={this.handleChange.bind(this)}  className="form-control"
                     />
                      <div className="alet alert-danger"
                      hidden={this.state.isDeptNameValid}>
                         DeptName is invalid
                     </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit" disabled={!this.state.isFormValid}/>
                </div>
            </form>
           </div> 
        );
    }
}
 
export default ValidationFormComponent;
```

    - the Axios Calls
``` javascript
import axios from 'axios';

class DepartmentHttpService {
    constructor(){
        this.url = 'http://localhost:9001/api/departments';
    }

    getData(){
        let response = axios.get(this.url);
        return response;
    }

    getDataById(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postData(dept){
        let response = axios.post(this.url,dept, {
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }
    putData(id,dept){
        let response = axios.put(`${this.url}/${id}`,dept, {
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }

    deleteData(id){
        let response = axios.delete(`${this.url}/${id}`);
        return response;
    }
}

export default DepartmentHttpService;
```

 - secure cals

 ``` javascript
import axios from 'axios';

export class SecureHttpCallService {
    constructor(){
        this.url = "http://localhost:9002";
    }

    registerUser(user){
        let response = axios.post(`${this.url}/api/app/register`, user,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }
    authUser(user){
        let response = axios.post(`${this.url}/api/app/auth`, user,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }
    getData(token){
        let response = axios.get(`${this.url}/api/app/get`, {
            headers:{
                'AUTHORIZATION': `bearer ${token}`
            }
        });
        return response;
    }
}
 ```

    - secure call component

 ``` javascript
 import React, { Component } from 'react';
import { SecureHttpCallService } from "./../../../services/securecallservice";
import TableComponent from './../../reusablecomponents/tablecomponent';
class SecureAccessComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            departments:[],
            message:''
         };
         this.serv  =new SecureHttpCallService();
    }

    createNewUser=()=>{
        const user ={
            Id:1,
            UserName: 'mahesh',
            Password: 'mahesh',
            Email:'mahesh@msit.com'
        };
        this.serv.registerUser(user).then((response)=>{
            this.setState({message: response.data.message});
        }).catch((error)=>{
            this.setState({message: `Error Occured ${error}`});
        });
    };

    authenticateUser=()=>{
        const user ={
            UserName: 'mahesh',
            Password: 'mahesh',
        };
        this.serv.authUser(user).then((response)=>{
            this.setState({message: response.data.response});
            // save the token is sessionStorage
            sessionStorage.setItem("token", response.data.token);
        }).catch((error)=>{
            this.setState({message: `Error Occured ${error}`});
        });
    };

    getData=()=>{
        let token = sessionStorage.getItem('token');
        this.serv.getData(token).then((response)=>{
            this.setState({departments:response.data.response});
            this.setState({message: 'Data Received Successfully'});
        }).catch((error)=>{
            this.setState({message: `Error Occured ${error}`});
        });
    };

    render() { 
        return ( 
            <div className="container">
                <input type="button" value="Create User" className="btn btn-primary" onClick={this.createNewUser.bind(this)}/>
                <hr/>
                <input type="button" value="Auth User" className="btn btn-success"
                onClick={this.authenticateUser.bind(this)}/>
                <hr/>
                <input type="button" value="Get Data" className="btn btn-warning"
                 onClick={this.getData.bind(this)}/>
                <br/>
                <strong>
                    {this.state.message}
                </strong>
                <hr/>
                <TableComponent dataSource={this.state.departments}></TableComponent>
            </div>
         );
    }
}
 
export default SecureAccessComponent;


 ```


    - Using External CSS in COmponent e.g. Bootstrap
        - npm install --save bootstrap
        - Imports the CSS from the CSS library / Framework in index.js e.g.
            - import './node_modules/....../XXXX.css'      
2. React with Functional Components (Phase 2)
    - The functional component cane be created using one of the following syntax
        - JS Function that returns HTML DOM

 ``` javascript
 import React from 'react';

function SimpleFuncationalComponent(){
    return(
        <div className="container">
            <h2>The Functional Component</h2>
        </div>
    );
}

export default SimpleFuncationalComponent;

 ```
            - The functional component can directly accept props from the parent component as like Class Components
``` javascript
import React from 'react';

function SimpleFuncationalComponent(props){
    return(
        <div className="container">
            <h2>The Functional Component</h2>
            <strong>
                Value Receied from Parent  = {props.msg}
            </strong>
        </div>
    );
}

export default SimpleFuncationalComponent;
```
        - using the constant Function Expression
            - Constant Expression implicitely diagesting the HTML DOM
``` javascript

// constant Expression having DOM in it
// cann be used like a stateless component
const ExpressionComponentDiagestingDOM=(props)=>(
    <div>
        <h2>constant Expression having DOM in it</h2>
        <strong>
            {props.val} && {props.val1}
        </strong>
        
    </div>
);

// the component that will accept multiple properties
// seperated by comma instead of using 'props'
// these parameters will be treated as context values
// passed by the parent of the current component
const ExpressionWithDirectPropertisWithoutPropsComponentDiagestingDOM=({val,val1})=>(
    <div>
        <h2>the component that will accept multiple properties seperated by comma instead of using 'props'</h2>
        <strong>
            {val} && {val1}
        </strong>
    </div>
);

```

            - Constant Expression that return DOM 
``` javascript
// constant expression that returns DOM like a functional component
// heavily used syntax for using Function Component with State, Props, Context with hooks for Production
const ExpressionDOMReturningComponent=({v1,v2})=>{
    return (
        <div>
            <h2>The DOM Returing Expression Component</h2>
            <strong>
            {v1} && {v2}
        </strong>
        </div>
    );
};


```
                   - Using Event Binding 
``` javascript
// constant expression that returns DOM like a functional component
// heavily used syntax for using Function Component with State, Props, Context with hooks for Production
// the contents of Function component are by default belong to the function itself that's why they can be directly ing to HTML eleemnts for showing data and executed with events of DOM elements 
const ExpressionDOMReturningComponent=({v1,v2})=>{
    const clickMe=()=>{
        alert('Button is Clicked');
    }
    return (
        <div>
            <h2>The DOM Returing Expression Component</h2>
            <strong>
            {v1} && {v2}
        </strong>
        <hr/>
        <button onClick={clickMe}>Click Me</button>
        </div>
    );
};

```

    - Using Standard Hooks
        - Hooks can be used only at component level. They cannot be called inside a function. 
            - The standard hooks can be called inside the custom hook function 
        - basic Hooks used for Production
            - useState(initialState, DispatchActio<newstate>)
                - Hook used for defining local state to the component
                - initialState
                    - the initial state of the component
                - DispatchActio<newstate>
                    - the callbak method that will be used to mutate (or change / modify) the initialState to the newstate
                        - DispatchAction represent an event that will be raised on UI which causes the state property to be mutated
                - syntax (ES 6 destructuring)
                    - const [v,setV] = useState(0);
                        - v is the state property having initial value as 0
                        - setV is the callback function that will be used to mutate 'v' to new state value
``` javascript
import React, { useState } from 'react';

const SimpleCalculatorComponent=()=>{
  // declare state
  
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);
  const [res,setRes] = useState(0);

  const add=()=>{
      setRes(x+y);
  }
  const clear=()=>{
      setX(0);
      setY(0);
  }
  return (
    <div className="container">
    <div className="form-group">
        {/* onChange={(evt)=> setX(parseInt(evt.target.value))} will update the init value of x to next new value entered in text element based on change event */}
        <label>Num1</label>
        <input type="text" className="form-control"
         value={x} name="num1" onChange={(evt)=> setX(parseInt(evt.target.value))}/>
    </div>
    <div className="form-group">
        <label>Num2</label>
        <input type="text" className="form-control"
        value={y} name="num2"  onChange={(evt)=> setY(parseInt(evt.target.value))}/>
    </div>
    <div className="form-group">
        <label>Result</label>
        <input type="text" className="form-control"
        value={res} readOnly/>
    </div>
    <div className="form-group">
       <input type="buttont" className="btn btn-primary" value="clear"
        onClick={clear}/>
       <input type="buttont" className="btn btn-success" value="add"
         onClick={add}/>
    </div>
</div>
  );
};

export default SimpleCalculatorComponent;

```

the state component withe the complex object
``` javascript
import React from 'react';

const TableComponent=(props)=>{
    if(props.dataSource === undefined || props.dataSource.length === 0){
        return (
            <div className="container">No Recrds to show</div>
        );
    } else {
    return (  
        <div className="container">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        {
                            Object.keys(props.dataSource[0]).map((col,idx)=>(
                                <th key={idx}>{col}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                     {
                         props.dataSource.map((rows,index)=>(
                            <tr key={index}>
                                {
                                  Object.keys(props.dataSource[0]).map((col,idx)=>(
                                    <th key={idx}>{rows[col]}</th>
                                ))  
                                }
                            </tr>
                         ))
                     }       
                </tbody>
            </table>
        </div>
       
      );
   }
};

export default TableComponent;


import React, { useEffect, useState } from 'react'
import TableCompponent from './../reusablecomponent/tablecomponentwithpros';
const DepartmentHookComponent=()=>{

    const [dept, setDept] = useState({DeptNo:0,DeptName:'',Location:'',Capacity:0});
    const [departments, updateDepartments] = useState([]);

    const clear=()=>{
        setDept({DeptNo:0,DeptName:'',Location:'',Capacity:0});
    };

    const save=()=>{
        // the state mutation of departments object by pushing the new 'dept' in it
        updateDepartments([...departments,dept]);
    };

    return (  
        <div className="container">
            <div className="form-group">
                <label>DeptNo</label>
                <input type="text" name="DeptNo" value={dept.DeptNo} onChange={(evt)=> setDept({...dept, DeptNo:parseInt(evt.target.value)})}  className="form-control"/>
            </div>
            <div className="form-group">
                <label>DeptNmae</label>
                <input type="text" name="DeptName" value={dept.DeptName} onChange={(evt)=> setDept({...dept, DeptName:evt.target.value})}  className="form-control"/>
            </div>
            <div className="form-group">
                <label>Location</label>
                <input type="text" name="Location" value={dept.Location} onChange={(evt)=> setDept({...dept, Location:evt.target.value})}  className="form-control"/>
            </div>
            <div className="form-group">
                <label>Capacity</label>
                <input type="text" name="Capacity" value={dept.Capacity} onChange={
                    (evt)=> setDept({...dept, Capacity:parseInt(evt.target.value)})
                }  className="form-control"/>
            </div>
            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary"
                 onClick={clear}/>
                <input type="button" value="Save" className="btn btn-success"
                 onClick={save}/>
            </div>
            <br/>
            
            <hr/>
            <h4>List of Departments</h4>
             <TableCompponent dataSource={departments}></TableCompponent>   
        </div>
        );
};

export default DepartmentHookComponent;
```



            - useContext()
                - The object that will be used to pass specific values from parent to child
                - Once the parent and also a child is unloaded the Context will be cleared 
                - Define a COntext with inital schema
                    - the  'createContext()' method from the 'react' package
                        - const mycontext = createContext(INITIAL-VALUE);
                - The Parent Component must use the 'provider' property of the context to provide value to child
                    - <mycontext.provider value={}></mycontext.provoder> 
                        - the 'value' is a Complex Object Literal
                            - value={p1}
                                - p1 can be data or callback function
                            - value = {{p1,p2}}    
                                - p1 can be data and p2 an be callback function  
                    - <mycontext.provider value={}>
                        <ChildComponent/>
                    </mycontext.provoder>    
                    - the ChildComponent has to subscribe to context and read provided values by the parent
                        - the 'useContext(context)' hook will be used to provide the subscription to the context by the child component    
                        - The child compoent can retrived values from the context and procees them    
``` javascript
 // datacontext
import { createContext } from "react";
// defining the context with initial value
export const DataContext = createContext(null);

// tablecomponent using context
import React, {useContext} from 'react';
import {DataContext} from './../datacontext';

const TableComponentContext=()=>{

    // subscribe to the DataContext using the 'useContext' hook and read the values from it
    const dataSource = useContext(DataContext); 

    if(dataSource === undefined ||dataSource.length === 0){
        return (
            <div className="container">No Recrds to show</div>
        );
    } else {
    return (  
        <div className="container">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        {
                            Object.keys(dataSource[0]).map((col,idx)=>(
                                <th key={idx}>{col}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                     {
                         dataSource.map((rows,index)=>(
                            <tr key={index}>
                                {
                                  Object.keys(dataSource[0]).map((col,idx)=>(
                                    <th key={idx}>{rows[col]}</th>
                                ))  
                                }
                            </tr>
                         ))
                     }       
                </tbody>
            </table>
        </div>
       
      );
   }
};

export default TableComponentContext;

// table component using complex object in context

import React, {useContext} from 'react';
import {DataContext} from '../datacontext';

const TableComponentContextEvent=()=>{

    // subscribe to the DataContext using the 'useContext' hook and read the values from it
    // the subscriber will have {departments,setDept}
    // key 0 of subscriber will be departments
    // key 1 of subscriber will be setDept 
    const subscriber = useContext(DataContext); 
    console.log(`The values in DataContext = ${JSON.stringify(subscriber)}`);
    const dataSource  = subscriber[Object.keys(subscriber)[0]]; // array
    const event = subscriber[Object.keys(subscriber)[1]]; // event

    if(dataSource === undefined ||dataSource.length === 0){
        return (
            <div className="container">No Recrds to show</div>
        );
    } else {
    return (  
        <div className="container">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        {
                            Object.keys(dataSource[0]).map((col,idx)=>(
                                <th key={idx}>{col}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {/* event(rows) will pass the selected row's data with event callback and it will be emitted to the parent coponent */}
                     {
                         dataSource.map((rows,index)=>(
                            <tr key={index} onClick={()=>event(rows)}>
                                {
                                  Object.keys(dataSource[0]).map((col,idx)=>(
                                    <th key={idx}>{rows[col]}</th>
                                ))  
                                }
                            </tr>
                         ))
                     }       
                </tbody>
            </table>
        </div>
       
      );
   }
};

export default TableComponentContextEvent;


// send ing data from parent
  <h4>List of Departments</h4>
            {/* passing values to child component using Context */}
            <DataContext.Provider value={departments}>
                 <TableComponentContext></TableComponentContext> 
            </DataContext.Provider>
            <hr/>
            {/* Passing Data and Callback to Context so that the value for the callback will be teceived from the child component through the context */}

            <DataContext.Provider value={{departments,setDept}}>
                <TableComponentContextEvent></TableComponentContextEvent>
            </DataContext.Provider>



```

            - useEffect()
                - Most important hook
                    - This is the COmbination of 'componentDidMount()' and 'componentWinUnMount()'
                    - USed to perform operations those are supposed to be executed during the compnent initialization
                        - AJAX Calls
                        - Event Subscriptions
                - Syntax
                    - useEffect(mounting operations callback, (optional but recommended) return unmounting operation callback, [dependency  array parameter]);
                    - useEffect(()=>{}, return ()=>{}, []);
                        - mounting operations callback
                            - logic to be executed after the rendering has taken plcae e.g. AJAX calls, Event Subscription
                        - unmounting operation callback
                            - logic for releasing all subscriptions as well as all events subscriptions  
                    - dependency  array parameter
                        - Since the useEffect() will execute at component level, till the component is mounted in browser, this will keep on executing mounting logic which may result into the component crash or adding huge data in browser. So to prevent we need to pass the depednency array parameter to inform to useEffect() that thestate is change the rendering based on state is completed and now it can stop
                            - generaly we pass an empty array [] as dependency parameter, this indicates any state property updates           
        - More Hooks can be used for production (but not always useful)    
            - useReducer()
                - State Monitor of React Appication w/o using Redux
                - Accept this as an alternative to useState()
                    - Returs the current state of the proeprty along with the Action that is dispatched 
                    - Use this hook when the State Property updates goes thorugh "complex state changes" based on "mutiple actions"
            - useMemo()
                - Memoization
                - Recompute the memoized values when the depednency parameter (aks state) is updated in recursion 
            - useCallback()
                - Used to process the inline callback execution received from child to parent
                    - Reuse the same memory for memoization that is computed by child in the parent 
            - useRef()
                - Provide the reference of the current HTML element to process it for reading and writing vaule.
                - This is used along with the 'ref' attribute of HTML elements in React Component
                    - the 'ref' is depricated because they are uncontrolled component (means does not wotk on state mutation)
    - Creating Custom Hooks
        - Used to oberride the the default behavior of the standard hooks by encapsulating them 
    - Memory Leaks handling using Hooks
    - Using React Compositional Pattern in App
        - Create a Build and destribute it so that oter app can use it using CDN
           - create a sigle js build file that contains all app dependencies and can be shared across other apps
           - npm run build --prod
                - not reusable, but available as in independent application for production
        - Loading the component when the 'Code is Splitted' across multiple logical / reusable components and a component is delyed for mounting
            -  React 16.8+, the 'Code Splitting' Concept
                - Based on the ES 6 Modules
                - Uses the File I/O based search for Modules inspired from Node.js Modle loaders
                    - Uses Module Loaders of JavaScript App to search, load and cache module features
                - The 'import' object        
        - Code-Splitting with 'Lazy-Loading' of te component
            - React.lazy() object
                - Provides a lazy loading for the component dynaically and rdenr it inside a predefined 'Suspense' component
                - React.lazy(()=>import(<PATH-OF-COMPONENT>))
                    - import() returns the 'Promise' object,
                    - the component exported from the <PATH-OF-COMPONENT> must have the 'default' export 
                        - e.g. export default <COMPONENT> 
                - <Suspense fallback={<RENDER-THE-FALLBACK-UI>}> untile the lazy component is not loaded
                - Recomendation
                    - Use the <Suspense>  under the error boundries                        
    - React Routing          
        - React Boundries
            - No defult support for Async HTTP Operation Inside React OM, instead use axios, fetch.
            - No Support for Independent Destributable Modules, instead use the React Package creation for distribution
            - No Support for SPA by default
        - Modern Web App with Routing
            - Use Third Party Route library or package and integarted it in React App
        - using React Routing using 'react-router-dom'
            - npm install --save react-router-dom    
            - Object in the react-router-dom
                - BrowserRouter
                    - This is used to manage the Routing Object model for React Components inside the browser
                        - Router.Provider
                            - Manage the Naviation across all components using following objects
                                - Switch
                                    - Object that provide Route Dictionary
                                    - Also executes Queries on Route Dictionary
                                - Route
                                    - Obejct for defining the Route URL in Route Dictionary 
                                        - exact
                                            - Read the Expression in the Url and accoring to it perform the path match
                                        - path
                                            - contains the URL
                                            - E.g.
                                                - path="/<URL>/:<parameter>"
                                        - The 'history()' object managed by Route.Provider() will allows to provide the Parameter based as well as the URL Based explict navifatopn
                                        - component
                                            - The Component Reference to be instantiated and loaded based on 'path' used in query
                                            - This component is mouneted in DOM Tree with its lifecycle (VERY-IMPORTANT)
                                                - When navigation takes place from one component to another component, then the 'componentWillUnmount()' of preious component is executed    
                                - Redirect
                                    - Use to define 'default' redirection
                                    - the 'to' property that uses the 'path' from Route to redirect to default routing when no path is found       
                                - Link
                                    - Object used to query to dictionary for link based navigation like anchor tag
                                        - the 'to' property, that accepts the path to query tp the dictionary                  

3. React with Redux (Phase 3)
    - Creating Redux App for State Managemenent
    - Action 
        - Function that will be dispatched from UI and will contains data posted from UI
        - This will use the ActionCreator to execute action logic 
    - ActionCreator
        - Based on Input action, the oute action will be generated with output data
        - This indicates what has happened  
    - Reducer
        - This will monitor all actions being dispatched under the Redux Context(?)
        - Redux-Context, is an object Model that manages execution of React Aplication with Redux Store, Actions, Reducers and Middlewares
            - All React Components must be executed under the Redux Context
        - Practically, Reducer is a JavaScript 'Pure Function' means the input parameters and output parameter are same
            - Input parameter is initial State in Store, and the output parameter is the next/modified State to be commited in store     
    - Store
        - The Application State Container for storing data posed by each component as well as data required by each component
        - The Component's lifecycle is executed under the scope of the Store (Redux-Context)
    - Middleware
        - Used for Asyn calls
    - redux package
        - npm install --save redux
        - createStore(<REDUCER>, <OBEJCT-ENHANCER>)
            - Method used to create a STORE object
            - REDUCER is an object that is used to monitor the state updates in store based on action
            - OBEJCT-ENHANCER
                - the additional information required by the store
                    - The Middleware Configuration in case when action(s) perform Asynchornous operations
                    - The REDUX-TOOLS-EXTENSIONS used to simulate the redux execution in browser's developer tools (NOT-RECOMMENDED-IN-PRODUCTION)
        - combineReducer()
            - Its an aggrigation of all reducers functions in the application that will passed to createStore() method
    - react-redux package
        - npm install --save react-redux
        - <Provider>
            - A component, that has the 'store' property which accpets store created using 'createStore()' method
            - this component manage an execution of all react components inside it by providing the 'Redux-Context'
            - <Provider store={<store>}>  <REACT-COMPONENT/>   </Provider>     
        - The 'connect(p1,p2)' method (traditional method of React-Redux)
            - Connects the React Component with Store (aka Component's subscription with Store)    
            - Allows to Read the State from Store and Show in it component
                - Use  'mapStateToProps' object this is 'p1' parameter, used to map the data fro store to props of the component
                    - State is the state from Store
                    - props is props object of the component to show data in component
            - Allows to dispatch an action from component based on event and make the action to execute  
                - Use 'mapDispatchToProps' object, this is 'p2', used to map an event of the compoenent with 'dispatch' object to dispatch an action  
                    - dispatch, is the object provided by Redux-Context to make a request to an action based on event on Compoenent, e.g. onClick, onChange, etc.
                    - using 'props' the function for the event will be mapped with dispatch object
        - React 16.8 with Redux 4.x, the react-redux 7.x supports new hooks to replace 'connect()' method
            - the 'useDispatch()'
                - replacement of 'mapDispatchToProps'     
            - the 'useSelector()'
                - replacement of 'mapStateToProps'            


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
# Date:03-May-2021
1. Create Calculator using React that looks like Calculator on Windows OS with Scientific Calculator Suport e.g. Sig/Cos/Tan/Power/Sqrt/Fibo, ect
2. Create a Master Component that will show a comboboxes with list of Categories and List of Manufactirers. There must be a Table Chaild component which will be generated based on Products Array with properties as ProductRowId, ProductId,ProductName,CategoreyName, Manufacturer, BasePrice, ect. When a Categorey is selected from Category Combobox the table shold show products matching with categories ans same bechavior for the Manufacturers Combobox 

# Date : 04-May-2021

1. Create a Custom Component that will be used to create validation summary to show all error messages occred in the component where it is used. When the element have valid value, the error message from the ValidationSummary must be removed
2. Make sure that, when the Component is rendered, all mandatory fileds must be having red start (*) next to it indicating that the field is mandatory.
3. Complete class components for Category, SubCategory with its node.js service for CRUD oeprations 
4. Write a custom Validator to make sure that the CategoryId, SubCategoryId are not already exist. Validate this immediately when end-user come out of the Currespoding Textbox for CategoryId and SubCategoryId. (NOte: Make this reusable validator) 
5. Create a component for Register User, Login user

# Date : 05-May-2021

1. Create a Products functional component, that will receive data from ProductsService (node+Express Service). This component should use the table component that will be provided with the Products data using Context. This table should show Products details in each row with its Image in the last column. Each Column must have the 'show details' link. When this link is clicked the 'Prouduct Detail' component should be displayed with all product details e.g.Manufacture, sellor, product specifications and other images of teh product e.g. Front View, Side View, etc. 
2. This compone t must have a search textbox, that will provide the search feature to search the product based on Product NAme, Manufacturer or other details e.g. if Laptop is to searched then ente6 16GB in seach and the table must show all laptops having 16b GB ram from all manufacturers.

# Day: 06-May-2021

1.Integrate the Routing for the Application of eCommerse with the following workflow
    - The ProductList COmponent with Search Facility should be avaiable for Anonymous User
        - The User should be able to search product and can see Product Details will images
    - There should be a link provided to Register te User
        - The Use Can Register as Vendor or Customer    
    - There must exist Link to Authenticate the User
        - If the Login User Role is Customer, then this user can access following Views
            - Select Products to Purchase
            - Can Place Order
            - Can View Order
            - Can Update Order by Adding/Updating/Deleting Order Items
            - Can access the Payment View
            - The Customer user aftre login can see all orders placed by him/her in past  
                - The Delivered Order can not be edited
            - Once the Customer Place the order for the product, its quantity must be reduced by Products Inventory
                - If the Product Quantity is zero, the in Product Search the View must show Procuct details with message as currently not available
        - If the login user is Vendor, then this user can upload products and product quantity can be added                        
            - The Vendor can be provoded message that the order is placed for products added by him
            - The Vewndor can delete / Update Product Info

# Date : 07-May-2021

1. Perform the following operations using the Redux State management
    - Make sure that when the row s selected from the table of Department list, the department details are shown in the CreateDeptComponent. The end-use can update department details and click on the sabe button, these details are added back to store and shown in the ListDeptsComponent again.
    - Remove the Department recrd from the store when the delete action is dispatched from the ListDeptsComponent
    - Provide the seacrh action to search records from the store based on locations
2. Create a SeachComponent which will search, records from store for Deparments, Employees e.g. 
    - The Store contains Departments and Employees reords
    - A Single Search component should be able to  perform search based on EmpName, Designation, DeptName, Location etc.
        - E.g. Search All Employess by DeptName
        - Search All Employyes by Location
        - Search All Employees by Designation     