import React from 'react';

import { useDispatch,useSelector } from "react-redux";

import { addDept } from "./actions/actions";
import CreateDeptComponent from './views/CreateDeptComponent';
import ListDeptsComponent from './views/ListDeptsComponent';
const MainReduxContainerComponent=()=>{
    // creating the dispatch object
    let dispatch = useDispatch();
    // subscribe to the store to read daat from teh state property of the store

    let departments = useSelector(state=>state.departments)

    return(
        <div className="container">
            <h1>The Redux Application</h1>
            {/* the request for addDept() action creator will be  dispateched
             using the  dispatch() object*/}
            <CreateDeptComponent
             AddDepartment={(dept)=>dispatch(addDept(dept))}></CreateDeptComponent>
            <hr />
            <ListDeptsComponent depts={departments}></ListDeptsComponent>
        </div>
    );
};

export default MainReduxContainerComponent;
