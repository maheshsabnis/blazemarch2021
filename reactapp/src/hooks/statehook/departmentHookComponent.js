import React, { useEffect, useState } from 'react'
import TableComponentContext from './../reusablecomponent/tablecomponentwithcontext';
import TableComponentContextEvent from './../reusablecomponent/tablecomponentwithcontextevent';
import DepartmentHttpService from './../../services/departmenthttpservice';

// import the DataContext

import { DataContext } from "./../datacontext";



const DepartmentHookComponent=()=>{

    const [dept, setDept] = useState({DeptNo:0,DeptName:'',Location:'',Capacity:0});
    const [departments, updateDepartments] = useState([{DeptNo:0,DeptName:'',Location:'',Capacity:0}]);
    const serv = new DepartmentHttpService();

    useEffect(()=>{
        serv.getData().then((resp)=>{
            updateDepartments(resp.data.rows); // mutate the departmemts array
        }).catch((error)=>{
            console.log(`Error Occured ${error}`);
        });
    },[]);
 

    const clear=()=>{
        setDept({DeptNo:0,DeptName:'',Location:'',Capacity:0});
    };

    const save=()=>{
        // the state mutation of departments object by pushing the new 'dept' in it
        updateDepartments([...departments,dept]);
    };

    return (  
        <div className="container">
            <div className="form-group">
                <label>DeptNo</label>
                <input type="text" name="DeptNo" value={dept.DeptNo} onChange={(evt)=> setDept({...dept, DeptNo:parseInt(evt.target.value)})}  className="form-control"/>
            </div>
            <div className="form-group">
                <label>DeptNmae</label>
                <input type="text" name="DeptName" value={dept.DeptName} onChange={(evt)=> setDept({...dept, DeptName:evt.target.value})}  className="form-control"/>
            </div>
            <div className="form-group">
                <label>Location</label>
                <input type="text" name="Location" value={dept.Location} onChange={(evt)=> setDept({...dept, Location:evt.target.value})}  className="form-control"/>
            </div>
            <div className="form-group">
                <label>Capacity</label>
                <input type="text" name="Capacity" value={dept.Capacity} onChange={
                    (evt)=> setDept({...dept, Capacity:parseInt(evt.target.value)})
                }  className="form-control"/>
            </div>
            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary"
                 onClick={clear}/>
                <input type="button" value="Save" className="btn btn-success"
                 onClick={save}/>
            </div>
            <br/>
            
            <hr/>
            <h4>List of Departments</h4>
            {/* passing values to child component using Context */}
            <DataContext.Provider value={departments}>
                 <TableComponentContext></TableComponentContext> 
            </DataContext.Provider>
            <hr/>
            {/* Passing Data and Callback to Context so that the value for the callback will be teceived from the child component through the context */}

            <DataContext.Provider value={{departments,setDept}}>
                <TableComponentContextEvent></TableComponentContextEvent>
            </DataContext.Provider>
              
        </div>
        );
};

export default DepartmentHookComponent;