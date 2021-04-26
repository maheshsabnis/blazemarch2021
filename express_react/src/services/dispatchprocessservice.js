import axios from 'axios';

export class DispatchProcessService {
    constructor(){
        this.url= 'http://localhost:8090/api/dispatchprocesses';
    }

    getDispatchProcess(){
        let response = axios.get(this.url);
        return response;
    }
    getDispatchProcessById(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postDispatchProcess(cat){
        let response = axios.post(this.url, cat, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return response;
    }
}