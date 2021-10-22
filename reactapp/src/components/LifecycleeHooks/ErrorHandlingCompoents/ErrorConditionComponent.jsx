import React, { Component } from 'react';

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
        try {
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
        }catch(e) {
            return(
                <div className="container">
                <strong>
                   Error Occured = {e.message}
                </strong>
            </div>
            );
        }
        
       
    }
}

class ContainerComponent extends Component {
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
                <MyCounterComponent></MyCounterComponent>
                <hr/>
                <input type="button" value="Reload"
                 onClick={this.reload.bind(this)}/>
            </div>
        );
    }
}
 
export default ContainerComponent;
 

