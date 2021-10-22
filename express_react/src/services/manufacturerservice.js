import axios from 'axios';

export class ManufacturerService {
    constructor(){
        this.url= 'http://localhost:8090/api/manufacturers';
    }

    getManufactureres(){
        let response = axios.get(this.url);
        return response;
    }
    getManufactureresById(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postManufactureres(manufacturer){
        let response = axios.post(this.url, manufacturer, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return response;
    }
}