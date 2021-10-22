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
 

