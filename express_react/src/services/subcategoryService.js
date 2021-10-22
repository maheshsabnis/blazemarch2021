import axios from 'axios';

export class SubCategoryService {
    constructor(){
        this.url= 'http://localhost:8090/api/subcategories';
    }

    getSubCategories(){
        let response = axios.get(this.url);
        return response;
    }
    getSubCategoriesById(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postSubCateory(subcat){
        let response = axios.post(this.url, subcat, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return response;
    }
}