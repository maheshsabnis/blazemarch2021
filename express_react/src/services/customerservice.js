import axios from 'axios';

export class CustomerService {
    constructor(){
        this.url= 'http://localhost:8090/api/customers';
    }

    getCustomers(){
        let response = axios.get(this.url);
        return response;
    }
    getCustomerById(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postCustomer(cust){
        let response = axios.post(this.url, cust, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return response;
    }
}