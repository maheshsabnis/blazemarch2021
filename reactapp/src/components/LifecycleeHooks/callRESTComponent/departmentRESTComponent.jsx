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
                    <input type="text" name="DeptNo" value={this.state.DeptNo} onChange={this.handleChange.bind(this)}  className="form-control"/>
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