import axios from 'axios';

export class SecurityService {
    constructor(){
       
    }
    getRoles(){
        let response = axios.get('http://localhost:8090/api/roles');
        return response;
    }
    registerUser(user){
        let response = axios.post('http://localhost:8090/api/registeruser', user,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }
    assignRoleToUser(user){
        let response = axios.post('http://localhost:8090/api/createuserrole', user,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }
    authUser(user){
        let response = axios.post('http://localhost:8090/api/authuser', user, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return response;
    }
}