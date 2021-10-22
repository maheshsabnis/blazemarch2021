import React from 'react';

function HelloTestComponent(props){
    if(props.message) {
        return (<h1>Hello, {props.message}</h1>);
    } else {
        return (<h1>Hello, Mr. UnKnown</h1>);
    }
}


export default HelloTestComponent;