import React, { Component } from 'react'

class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        if(this.props.dataSource === undefined || this.props.dataSource.length === 0){
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
                                Object.keys(this.props.dataSource[0]).map((col,idx)=>(
                                    <th key={idx}>{col}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                         {
                             this.props.dataSource.map((rows,index)=>(
                                <tr key={index}>
                                    {
                                      Object.keys(this.props.dataSource[0]).map((col,idx)=>(
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
    }
}
 
export default TableComponent;