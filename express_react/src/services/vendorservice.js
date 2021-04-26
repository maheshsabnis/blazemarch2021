import axios from 'axios';

export class VendorService {
    constructor(){
        this.url= 'http://localhost:8090/api/vendors';
    }

    getVendors(){
        let response = axios.get(this.url);
        return response;
    }
    getVendorsById(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postVendors(vendor){
        let response = axios.post(this.url, vendor, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return response;
    }
}