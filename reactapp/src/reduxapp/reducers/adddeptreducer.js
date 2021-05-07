// import all exportabel from action.js

import * as actions from './../actions/actions';

// define an initial state

export const initialState = {
    departments:[]
};


// define a reducer function
// the 'action' represents the output action based on which the reducer will update the store 
export const addDeptReducer=(state=[], action)=>{
    switch(action.type) {
        case actions.ADD_DEPT: {
               console.log(`In ADD_DEPT ${JSON.stringify(action.payload)}`); 
            return [...state,action.payload] } // update the state with the new departments state by ading newly received record
        default:
               return state; // return the default state     
    }
};