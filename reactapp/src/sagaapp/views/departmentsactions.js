import React from 'react';
import { connect } from "react-redux";
import { getDepartments, addDepartment } from "./../actions/index";
export const DepartmentActionsomponent=(props)=>{
    return(
        <div className="container">
            <input type="button" value="Get Departments" 
             className="btn btn-primary"
              onClick={props.getDepts}/>
            <hr />
            <input type="button" value="Add Department" 
             className="btn btn-success"
              onClick={()=>props.addDept({
                  DeptNo:901,DeptName:'Dept_901', Location: 'Pune', Capacity:8000
              })}/>
              <hr />
              <strong>
                    Inserted data : {JSON.stringify(props.dept)}
              </strong>
            

        </div>
    );
};

// create an object that will map the dispatch of action from UI
// to the action creator using connect() method

const mapDispatchToProps={
    // props:action methdot to dispatch
    getDepts:getDepartments,
    addDept:addDepartment
};

const mapStateToProps= state=>({
    dept:state.department
});

// connect the Component to the Redux Action Dispatcher
// using the connect() method
export default connect(mapStateToProps, mapDispatchToProps)(DepartmentActionsomponent);
// export default DepartmentActionsomponent;
