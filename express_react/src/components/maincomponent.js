import React,{useState, useEffect} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import ProduuctListComponent from './ProductListComponent';
import HomeComponent from "./HomeComponent";
import RegisterUserComponent from './RegisterUserComponent';
import LoginComponent from './LoginComponent';
import CustomerComponent from './CustomerComponent';
import VendorComponent from './VendorComponent';

const MainComponent=(props)=>{
    const [authStatus, updateAuthStatus] = useState(false);
    useEffect(()=>{
        let status = Boolean(sessionStorage.getItem('Authenticated'));
        console.log(status);
        updateAuthStatus(status);
    });
    const logout=()=>{
        sessionStorage.clear();
        updateAuthStatus(false);
        alert(props);
        props.history.push('/login');
    };
    return(
        <div className="container">
        <h1>The React Routing Application</h1>
        <table className="table table-bordered table-striped table-danger">
           
          <tbody>
             <tr>
                <td>
                    <Link to="/">Home</Link>
                </td>
                <td>
                    <Link to="/registeruser">Register User</Link>
                </td>
                  <td>
                    <Link to="/productlist">Product List</Link>
                </td> 
                <td>
                <button className="btn btn-warning" hidden={!authStatus}
                 onClick={logout}>
                         Logout
                </button>
                </td> 
             </tr>
          </tbody>
        </table>
       
        <div>
            <Switch>
                <Route exact path="/" component={HomeComponent}></Route>
                <Route exact path="/registeruser" component={RegisterUserComponent}></Route>
                <Route exact path="/productlist" component={ProduuctListComponent}></Route>
                <Route exact path="/login" component={LoginComponent}></Route>
                <Route exact path="/customer" component={CustomerComponent}></Route>
                <Route exact path="/vendor" component={VendorComponent}></Route>
                <Route exact path="/logout" component={LoginComponent}></Route>
                <Redirect to="/"/>
            </Switch>
        </div>
    </div>
    );
};

export default MainComponent;