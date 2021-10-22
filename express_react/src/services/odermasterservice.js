import axios from 'axios';

export class OrderMasterService {
    constructor(){
        this.url= 'http://localhost:8090/api/orders';
    }

    getOrders(){
        let response = axios.get(this.url);
        return response;
    }
    getOrdersById(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postOrder(order){
        let response = axios.post(this.url, order, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return response;
    }
}