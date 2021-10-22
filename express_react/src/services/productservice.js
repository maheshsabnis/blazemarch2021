import axios from 'axios';

export class ProductService {
    constructor(){
        this.url= 'http://localhost:8090/api/products';
    }

    getProducts(){
        let response = axios.get(this.url);
        return response;
    }
    getProductsById(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postProducts(prd){
        let response = axios.post(this.url, prd, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return response;
    }
}