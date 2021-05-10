// the action creator that will initiate an async call using Middleware
export const getDepartments=()=>{
    return {
        type:'GET_DEPARTMENTS'
    };
};

// write action

export const  addDepartment=(department)=>{
    return {
        type: 'ADD_DEPARTMENT',
        payload: department // the input parameter send by the UI and will be returned by the action creator
    };
};