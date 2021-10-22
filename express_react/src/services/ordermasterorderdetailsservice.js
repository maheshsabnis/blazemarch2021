import axios from 'axios';

export class OrderMasterItemDetailsService {
    constructor(){
        this.url= 'http://localhost:8090/api/ordersitemdetails';
    }

    getOrderMasterItemDetails(){
        let response = axios.get(this.url);
        return response;
    }
    getOrderMasterItemDetailsById(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postOrderMasterItemDetails(item){
        let response = axios.post(this.url, item, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return response;
    }
}