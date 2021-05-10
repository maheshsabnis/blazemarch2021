import React from 'react';
import DepartmentActionsomponent from './views/departmentsactions';
import ListDepartmentsComponent from './views/ListDepartments';
const MainSagaComponent=()=>{
    return (
        <div className="container">
            <DepartmentActionsomponent></DepartmentActionsomponent>
            <hr />
            <ListDepartmentsComponent></ListDepartmentsComponent>
        </div>
    );
};

export default MainSagaComponent;