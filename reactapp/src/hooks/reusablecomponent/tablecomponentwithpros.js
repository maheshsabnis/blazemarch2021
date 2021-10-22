import React from 'react';

const TableComponent=(props)=>{
    if(props.dataSource === undefined || props.dataSource.length === 0){
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
                            Object.keys(props.dataSource[0]).map((col,idx)=>(
                                <th key={idx}>{col}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                     {
                         props.dataSource.map((rows,index)=>(
                            <tr key={index}>
                                {
                                  Object.keys(props.dataSource[0]).map((col,idx)=>(
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

export default TableComponent;
