import React, { useState } from 'react';
import {SecurityService} from './../services/securityservice';
import {AuthResponse} from './../models/AuthResponse';
const LoginComponent=(props)=>{
    const [user, setUserInfo] = useState({UserName:'',Password:''});
    const [message,setMessage] =useState('');
    const serv = new  SecurityService();
    const [authStatus, setAuthStatus] = useState({
        UserName:'',
        Role:'',
        AuthStatus:false,
        Response:''
    });
    const clear=()=>{
        setUserInfo({
            UserName:'',Password:''
        });
    };

    const save=()=>{
        serv.authUser(user)
            .then((response)=>{
                console.log(`Auth Status ${JSON.stringify(response.data)}`);
                setAuthStatus(response.data);
                // save the auth information in the localStorage
                sessionStorage.setItem('Authenticated', authStatus.AuthStatus);    
                if(authStatus.Role === "Customer"){
                    props.history.push('/customer');
                }
                if(authStatus.Role === "Vendor"){
                    props.history.push('/vendor');
                }
               
            }).catch((error)=>{
                setMessage(`Error Occured ${error}`);
            });
    };

    return(
        <div className="component">
            <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control"
                 value={user.UserName}
                 onChange={(evt)=>setUserInfo({...user, UserName:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Pasword</label>
                <input type="password" className="form-control"
                value={user.Password}
                onChange={(evt)=>setUserInfo({...user, Password:evt.target.value})}
                />
            </div>

            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary" onClick={clear}/>
                <input type="button" value="Save" className="btn btn-success" onClick={save}/>
            </div>
        </div>
    );
};

export default LoginComponent;