import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

import './index.css';
// imporing bootstrap CSS Library
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import FirstSimpleComponent from './components/StatelessComponent/firstSimpleComponen';

import MessageComponent from './components/StatefullComponents/messageComponent';
import reportWebVitals from './reportWebVitals';
import BasicCalculatorComponent from './components/BasicCalculator/basicCalculatorComponent';
import ProductComponent from './components/productcomponent/productComponent';
import LifecycleComponent from './components/LifecycleeHooks/ConditionalComponents/MouseMoveComponent';
import DepartmentRESTComponent from './components/LifecycleeHooks/callRESTComponent/departmentRESTComponent';
import ContainerComponent from './components/LifecycleeHooks/ErrorHandlingCompoents/ErrorConditionComponent';
import ContainerForErrorBoundryComponent from './components/LifecycleeHooks/ErrorHandlingCompoents/ErrorBoundryComponent';
import ValidationFormComponent from './components/validations/ValidationComponent';
import SecureAccessComponent from './components/LifecycleeHooks/callRESTComponent/secureaccesscomponent';
import SimpleFuncationalComponent from './hooks/simplefunctionalComponent';
import SimpleCalculatorComponent from './hooks/statehook/simplecalculator';
import DepartmentHookComponent from './hooks/statehook/departmentHookComponent';
import ToggleCompoent from './hooks/useEffectApp/TooggleComponent';
import LazyComponent from './hooks/lazyload';
import CustomHookComponet from './hooks/customhooks/customHookComponent';
import ImportingComponent from './hooks/codesplitting/SimpleCompoent/importingComponent';
import LazyLoadingComponent from './hooks/codesplitting/UsingComponents/LazyLoadingComponent';
import MainContainerComponent from './routingapp/maincontainercomponent';
let message = 'This is the Message from the Parent';

let newmessage = 'This is the New Message from the Parent';

// the render() method of the ReactDOM will mount the component
// in HTML element with id as 'root'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContainerComponent/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();