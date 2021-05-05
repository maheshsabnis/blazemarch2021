import React, {useContext} from 'react';
import {DataContext} from './../datacontext';

const TableComponentContext=()=>{

    // subscribe to the DataContext using the 'useContext' hook and read the values from it
    const dataSource = useContext(DataContext); 

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
                     {
                         dataSource.map((rows,index)=>(
                            <tr key={index}>
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

export default TableComponentContext;
