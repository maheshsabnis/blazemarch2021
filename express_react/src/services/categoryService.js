import axios from 'axios';

export class CategoryService {
    constructor(){
        this.url= 'http://localhost:8090/api/categories';
    }

    getCategories(){
        let response = axios.get(this.url);
        return response;
    }
    getCategoriesById(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postCateory(cat){
        let response = axios.post(this.url, cat, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return response;
    }
}