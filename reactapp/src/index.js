import React from 'react';
import ReactDOM from 'react-dom';

 // import 'createStore()' and the middleware using 'applyMiddleware()' function, and the compose()
 // applyMiddleare() will be used to load the middleware in store
 // compose(), the method that will implement the parameter enhancer tio enhance the createStore() 
 // using REDUX_DEV_TOOLS and middleware
 import { createStore, applyMiddleware, compose } from "redux";
// import the sagaMiddleware object using createSagaMinndeware

import createSagaMinndeware from 'redux-saga';


 // import Provider

 import { Provider } from "react-redux";

import './index.css';
// imporing bootstrap CSS Library
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import reducer
import reducer from "./sagaapp/reducers/index";

// import the saga generator function
import rootSaga from './sagaapp/sagas/index';
 
import reportWebVitals from './reportWebVitals';
// importing the saga component
import MainSagaComponent from './sagaapp/mainsagacomponent';

// initialize the sala middleware

const sagaMiddleware = createSagaMinndeware();

// create a parameter enhancer object
// the mandatory object specified as  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// compose represents any othe additional parameter to be pased to the createStore() e.g. middleware 
const parameterEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create a store using reducer and Saga Middleware
let store = createStore(reducer, parameterEnhancer(applyMiddleware(sagaMiddleware)));
 
// modify the sagaMiddlere object with its 'run()' method to keep running the rootSaga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    {/* the Redux COntext with middleware is created with store to manage the react-redux execution for all react components those are using dispatch, store connect using selector, etc*/}
    <Provider store={store}>
       <MainSagaComponent></MainSagaComponent>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
