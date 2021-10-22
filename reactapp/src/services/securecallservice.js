import axios from 'axios';

export class SecureHttpCallService {
    constructor(){
        this.url = "http://localhost:9002";
    }

    registerUser(user){
        let response = axios.post(`${this.url}/api/app/register`, user,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }
    authUser(user){
        let response = axios.post(`${this.url}/api/app/auth`, user,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }
    getData(token){
        let response = axios.get(`${this.url}/api/app/get`, {
            headers:{
                'AUTHORIZATION': `bearer ${token}`
            }
        });
        return response;
    }
}