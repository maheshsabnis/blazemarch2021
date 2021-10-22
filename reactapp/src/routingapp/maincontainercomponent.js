import React from 'react';
import {Route, Link,Redirect, Switch} from 'react-router-dom';
import CreateDepartmentComponent from './createdepartment';
import ListDepartmentsComponent from './listdepartment';
import UpdateDepartmentComponent from './updatedepartment';
const MainContainerComponent=()=>{
    return (
    <div className="container">

    <h1>The Single Page App</h1>
    <table className="table table-bordered table-striped">
        <tbody>
            <tr>
                <td>
                    <Link to="/">List Departments</Link>
                </td>
                <td>
                    <Link to="/create">Create Department</Link>
                </td>
            </tr>
        </tbody>
    </table>    


    {/* Defining Route Links in Route Table */}
      <Switch>
        <Route exact path="/" component={ListDepartmentsComponent}></Route>
        <Route exact path="/create" component={CreateDepartmentComponent}></Route>
        <Route exact path="/update/:id" component={UpdateDepartmentComponent}></Route>
        <Redirect to="/"></Redirect>
      </Switch>      
    </div>);
};

export default MainContainerComponent;
