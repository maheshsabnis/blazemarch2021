import React from 'react';
import { Link } from "react-router-dom";
const HomeComponent=()=>{
    return(
        <div className="container">
            <h1>The Online Shopping App</h1>
            <h2>Please login to Access the Application</h2>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default HomeComponent;