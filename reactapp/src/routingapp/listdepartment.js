import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import DepartmentHttpService from './../services/departmenthttpservice';
const ListDepartmentsComponent=()=>{
    const serv = new DepartmentHttpService();
    const [departments, updateList] = useState([]);
    useEffect(()=>{
        serv.getData()
            .then((response)=>{
                updateList(response.data.rows);
            }).catch((error)=>{
                console.log(`Eror ocured ${error}`);
            });
        return()=>{
            console.log(`List Departments Component is UnMounted`);
        }    
    },[]);
    if(departments=== undefined || departments.length === 0){
        return (
            <div className="container">No records</div>
        );
    }
    return (
        <div className="container">
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    {
                        Object.keys(departments[0]).map((col,idx)=>(
                            <th key={idx}>{col}</th>
                           
                        ))
                       
                    }
                     <th></th>
                </tr>
            </thead>
            <tbody>
                 {
                     departments.map((rows,index)=>(
                        <tr key={index}>
                            {
                              Object.keys(departments[0]).map((col,idx)=>(
                                <td key={idx}>{rows[col]}</td>
                               
                            ))  
                                 
                            }

                            <td>
                                <button className="btn btn-warning">
                                     <Link to={`update/${rows.DeptNo}`}>Edit</Link>
                                </button>   
                            </td>  
                        </tr>

                     ))
                 }       
            </tbody>
        </table>
    </div>
    );
};

export default ListDepartmentsComponent;
