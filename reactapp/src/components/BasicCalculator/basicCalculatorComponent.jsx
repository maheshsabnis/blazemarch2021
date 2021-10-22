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
    // handleNum1Change(evt){
    //     this.setState({num1:parseInt(evt.target.value)});
    // }
    // handleNum2Change(evt){
    //     this.setState({num2:parseInt(evt.target.value)});
    // }

    // mutating states for each input elements
    // using a single Handler
    handleInputChanges(evt){
        // [e.target.name] an array of elements having same name as the name of the state property bound to it
        // the [e.target.name]: e.target.value expression will match the 'name' with 'state' property  and update
        // the state based on the name of the element on which then change event is raised
        this.setState({[evt.target.name]: evt.target.value});
    }



    clear(){
        this.setState({num1:0});
        this.setState({num2:0});
        this.setState({res:0});
    }

    add(){
        let result = parseInt(this.state.num1) + parseInt(this.state.num2);
        this.setState({res:result});
    }
    render() { 
        return ( 
            <div className="container">
                <div className="form-group">
                    <label>Num1</label>
                    <input type="text" className="form-control"
                     value={this.state.num1} name="num1" onChange={this.handleInputChanges.bind(this)}/>
                </div>
                <div className="form-group">
                    <label>Num2</label>
                    <input type="text" className="form-control"
                    value={this.state.num2} name="num2" onChange={this.handleInputChanges.bind(this)}/>
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
