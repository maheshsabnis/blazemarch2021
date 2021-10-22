import React, { useState, useEffect } from 'react';

import { SecurityService } from "./../services/securityservice";

const  RegisterUserComponent=()=>{
    const [roles, updateRoles] = useState([]);
    const [user, updateUser] = useState({
        UserName:'',Password:'',EmailAddress:''
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userRole, updateUserRole] = useState({
        UserName:'',RoleName:''
    });
    const [message, setMessage]= useState('');
    const serv = new SecurityService();

    useEffect(()=>{
        serv.getRoles()
            .then((response)=>{
                updateRoles(response.data.rows);
                setMessage('Data Received Successfully');
            })
            .catch((error)=>{
                setMessage(`Error Occured ${error}`);
            }); 
    },[]);

    const clear=()=>{
        updateUser({  UserName:'',Password:'',EmailAddress:''});
        setConfirmPassword('');
    };
    const save=()=>{
         const newUser = serv.registerUser(user);
         userRole.UserName = user.UserName;
         alert(`The User In Role ${userRole}`);
         const setRoleToUser = serv.assignRoleToUser(userRole);

         Promise.all([newUser,setRoleToUser]).then((responses)=>{
             setMessage(`User Created Successfully ${responses[0].data.rows} and Role is assigned Successfully ${responses[1].data.rows}`);
             alert('User with Role Created');
         }).catch((error)=>{
             setMessage(`Error Occured ${error}`)
         });
    };

    return(
        <div className="contanier">
            <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control" placeholder="Enter User Name"
                 value={user.UserName}
                 onChange={(evt)=> updateUser({...user, UserName:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter Password"
                 value={user.Password}
                 onChange={(evt)=> updateUser({...user, Password:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" 
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={(evt)=> setConfirmPassword(evt.target.value)}/>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control"
                placeholder="Enter Email"
                value={user.EmailAddress}
                 onChange={(evt)=> updateUser({...user, EmailAddress:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Select Your Role</label>
                <select className="form-control"
                 value={userRole.RoleName}
                 onChange={(evt)=>{
                    updateUserRole({...userRole, RoleName: evt.target.value})
                 }}>
                     {
                         roles.map((r,i)=>(
                             <option key={i} value={r.RoleName}>{r.RoleName}</option>
                         ))
                     }
                 </select>
               
            </div>
            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary" onClick={clear}/>
                <input type="button" value="Save" className="btn btn-success" onClick={save}/>
            </div>
            <hr/>
            <div className="form-group">
                {message}
            </div>
        </div>
    );
};

export default RegisterUserComponent;