import React,{useEffect,useState} from 'react';
import DepartmentHttpService from './../../services/departmenthttpservice';
export const usePromise = (url)=>{
    const serv = new DepartmentHttpService();
    const [departments,updateDepartment] = useState([]);
    useEffect(()=>{
        serv.getDataFromUrl(url)
            .then((response)=>{
                updateDepartment(response.data);
            })
            .catch((error)=>{
                console.log(`Error Ocured ${error}`);
            });
    },[]);
    return departments;
};