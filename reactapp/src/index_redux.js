import React from 'react';
import ReactDOM from 'react-dom';

 // import 'createStore()'
 import { createStore } from "redux";

 // import Provider

 import { Provider } from "react-redux";

import './index.css';
// imporing bootstrap CSS Library
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import reducer
import { rootReducer } from "./reduxapp/reducers/index";

 
import reportWebVitals from './reportWebVitals';
import MainReduxContainerComponent from './reduxapp/MainReduxContainerComponent';

// create a store
let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
 
ReactDOM.render(
  <React.StrictMode>
    {/* the Redux COntext is created with store to manage the react-redux execution for all react components those are using dispatch, store connect using selector, etc*/}
    <Provider store={store}>
       <MainReduxContainerComponent></MainReduxContainerComponent>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
