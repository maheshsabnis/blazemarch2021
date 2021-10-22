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

