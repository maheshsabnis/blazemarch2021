// saga is implemented in steps for agreegating all generators, action Initiating Mathod (takeLatets)
// actual call to async operations, subscript to promise using call(), dispatching output action
// using put()

// import the HTTP Service
import DepartmentHttpService from './../../services/departmenthttpservice';
// import an operator model from redux-saga/effects for managing async calls

import { takeLatest, all, call,put } from "redux-saga/effects";

// write a function that will access the service and perform async oepration

function fetchDepartments(){
    let serv = new DepartmentHttpService();
    // make async call and subscribe it from the data using the .then()
    // method that returns the promise 
    const response = serv.getData().then((result)=>result.data.rows);
   
    // resolve the response through the  promises
    return Promise.resolve(response);
}



// the generator function that will manage the service calls and get the resolved promise
// object and dispatch the output action
function* dispatchGetDepartmentsSuccess(){
    // the call() will internally executed the 'fetchDepartments'
    // upon receiving the result from it return the resultant records as a sequence
    // using generator 
   const resolvedResponse = yield call(fetchDepartments);
    console.log(`The Promise is Resolved in Success ${JSON.stringify(resolvedResponse)}`);
   // dispatch the output action along with the data

   yield put({
       type: 'GET_DEPARTMENTS_SUCCESS',
       departments: resolvedResponse ||  {error: 'GET_DEPARTMENTS_FAILED'} // payload
   });

} 



// the generator function, that will listen to GET_DEPARTMENTS action and map this action to the 
// generator function which will displatch an output action by subscribing to Promise and reolve it
function* listenGetDepartments(){
  // link the input dispatched action to the output action
  yield takeLatest('GET_DEPARTMENTS', dispatchGetDepartmentsSuccess);
}




function postDepartment(dept){
  let serv = new DepartmentHttpService();
  const response = serv.postData(dept).then((result)=>result.data.record);
  return Promise.resolve(response);
}

// generator function for success thatb is accessing the postDepartment
// the 'action' parameter represent the reference of an action creator dispatched
// so that its payload will be used
function* dispatchAddDepartmentSuccess(action){
    // read the payload data
    const inputData = action.payload;
    // call the method that will invoke the HTTP service and pass inut data to it
    const resolvedReponse = yield call(postDepartment, inputData);
    // yield the output action
    yield put({
        type:'ADD_DEPARTMENT_SUCCESS',
        department: resolvedReponse
    })
}

// generator function that will listen to the ADD_DEPARTMENT dispatched action

function* listenAddDepartment(){
    // first parameter is parrten which is the action that is dispatched along with 
    // the 'payload' return by the action
    // the second parameter, is a function that will 
    // accept the reference of the action being dispatched based on first parameter
    // and will have an access to payload returned by it
    yield takeLatest('ADD_DEPARTMENT', dispatchAddDepartmentSuccess);
}





// 1. create a root saga
export default function* rootSaga(){
    // array of all dispatchers initialted from UI
    yield all([listenGetDepartments(), listenAddDepartment()]);
}