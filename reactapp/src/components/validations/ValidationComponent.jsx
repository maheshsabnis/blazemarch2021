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