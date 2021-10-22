// define an action types
export const ADD_DEPT = 'ADD_DEPT';

// action creator method
// an input parameter that will be received from the object (mostly view)
// by dispatching the action

// the action creator will return an object containing the Output Action
// and the 'payload', the payload is the output parameter
export const addDept=(dept)=>{
    console.log(`Action Dispatch Request is received ${JSON.stringify(dept)}`);
    // some logic here always a asynchonous logic
    dept.DeptName = dept.DeptName.toUpperCase();
    return {
        type: ADD_DEPT, // the output action
        payload:dept // output from then output action
    };
}