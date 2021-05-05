import React from 'react';

function SimpleFuncationalComponent(props){
    return(
        <div className="container">
            <h2>The Functional Component</h2>
            <strong>
                Value Receied from Parent  = {props.msg}
            </strong>
            <hr/>
            <ExpressionComponentDiagestingDOM val={'Mahesh'}
             val1={props.msg}></ExpressionComponentDiagestingDOM>
             <hr/>
             <ExpressionWithDirectPropertisWithoutPropsComponentDiagestingDOM
              val={'Mahesh'}
              val1={props.msg}></ExpressionWithDirectPropertisWithoutPropsComponentDiagestingDOM>
              <hr/>
              <ExpressionDOMReturningComponent
              v1={'Mahesh'} v2={'Sabnis'}></ExpressionDOMReturningComponent>
        </div>
    );
}


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




export default SimpleFuncationalComponent;
