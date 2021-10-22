import React from 'react';
import TableComponent from './../../hooks/reusablecomponent/tablecomponentwithpros';
const ListDeptsComponent=(props)=>{
    if(props.depts===undefined || props.depts.length === 0){
        return (<div>No records</div>);
    } else {
       return ( <TableComponent dataSource={props.depts}></TableComponent>)
    }
};

export default ListDeptsComponent;
