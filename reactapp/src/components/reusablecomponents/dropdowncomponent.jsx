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
        if(this.props.dataSource === undefined){
           return( <div className="contaier">
                No Data to show
            </div>);
        } else {
        return (  
             <select value={this.props.stateProperty} className="form-control"
              onChange={this.handleChange.bind(this)}>
                 {
                     this.props.dataSource.map((opt,idx)=>(
                         <option key={idx} value={opt}>{opt}</option>
                     ))
                 }
             </select>
        );}
    }
}
 
export default DropDownComponent;