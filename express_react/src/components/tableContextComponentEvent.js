import React, {useContext} from 'react';

import { DataContext } from "./dataContext";

const TableContextComponentEvent=()=>{

    // read data from DataContext
    // recive data from Context
    const consumeValues = useContext(DataContext);    
    
    // from the DataContext read the first property and read keys from the property
    // the arrayData will be the employees array from the DataContext
    const arrayData = consumeValues[Object.keys(consumeValues)[0]];
    console.log(arrayData);

    // the first property in the DataContext object is the CallBack
    // the callback function name is 'updateEmpoyee'
    const callback = consumeValues[Object.keys(consumeValues)[1]];
    console.log(callback);

    if(arrayData.length === 0){
        return (<div>No Data Received Yet</div>)
    } else {
            if(arrayData === undefined){
                return (<div>No Data Received Yet from the parent</div>);
            } else {
        // storeding keys of the data received from DataContext
        // so that columns can be generated
        let columns = [];
        columns = Object.keys(arrayData[0]);
        return (
            <div className="container">
                <h6>Dynamic Table</h6>
                <table className="table table-bordered table-striped table-dark">
                <thead>
                     <tr>
                       {
                          columns.map((col,idx)=>(
                               <th key={idx}>{col}</th>
                           ))
                       }
                     </tr>
                </thead>
                <tbody>
                     {
                        arrayData.map((row,index)=>(
                             <tr key={index} onClick={()=> callback(row)}>
                                {
                                    columns.map((col,idx)=>(
                                        <td key={idx}>{row[col]}</td>
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
    }
}

export default TableContextComponentEvent;