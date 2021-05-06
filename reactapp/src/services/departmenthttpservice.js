import axios from 'axios';

class DepartmentHttpService {
    constructor(){
        this.url = 'http://localhost:9001/api/departments';
    }

    getData(){
        let response = axios.get(this.url);
        return response;
    }

    getDataFromUrl(address){
        let response = axios.get(address);
        return response;
    }


    getDataById(id){
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }
    postData(dept){
        let response = axios.post(this.url,dept, {
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }
    putData(id,dept){
        let response = axios.put(`${this.url}/${id}`,dept, {
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response;
    }

    deleteData(id){
        let response = axios.delete(`${this.url}/${id}`);
        return response;
    }
}

export default DepartmentHttpService;