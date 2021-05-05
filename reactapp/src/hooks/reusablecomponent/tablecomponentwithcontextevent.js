import React, {useContext} from 'react';
import {DataContext} from '../datacontext';

const TableComponentContextEvent=()=>{

    // subscribe to the DataContext using the 'useContext' hook and read the values from it
    // the subscriber will have {departments,setDept}
    // key 0 of subscriber will be departments
    // key 1 of subscriber will be setDept 
    const subscriber = useContext(DataContext); 
    console.log(`The values in DataContext = ${JSON.stringify(subscriber)}`);
    const dataSource  = subscriber[Object.keys(subscriber)[0]]; // array
    const event = subscriber[Object.keys(subscriber)[1]]; // event

    if(dataSource === undefined ||dataSource.length === 0){
        return (
            <div className="container">No Recrds to show</div>
        );
    } else {
    return (  
        <div className="container">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        {
                            Object.keys(dataSource[0]).map((col,idx)=>(
                                <th key={idx}>{col}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {/* event(rows) will pass the selected row's data with event callback and it will be emitted to the parent coponent */}
                     {
                         dataSource.map((rows,index)=>(
                            <tr key={index} onClick={()=>event(rows)}>
                                {
                                  Object.keys(dataSource[0]).map((col,idx)=>(
                                    <th key={idx}>{rows[col]}</th>
                                ))  
                                }
                            </tr>
                         ))
                     }       
                </tbody>
            </table>
        </div>
       
      );
   }
};

export default TableComponentContextEvent;
