import React from 'react';
import { connect } from "react-redux";
const ListDepartmentsComponent=({departments,dept})=> 
 departments?(
    <div className="container">
        <h2>List of Departments</h2>
        {JSON.stringify(departments)}

        <hr />
        <strong>
            Inserted data : {JSON.stringify(dept)}
        </strong>
    </div>

 ):null


// create an object that will map the State from Redux Store
// to the props of the current component

const mapStateToProps=state=>({
    // props: the state from the redux store
    departments: state.departments ,
    dept: state.department
});

// map the store with the current component using connect() method

export default connect(mapStateToProps, null)(ListDepartmentsComponent);

// export default ListDepartmentsComponent;
