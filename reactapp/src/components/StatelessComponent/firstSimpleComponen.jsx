// 1. import React object Model and the Componenr class from the 'react' package

import React, {Component} from 'react';

// importing compoenent from oter file
import ThisrdSimpleComponent from './thirdSimpleComponent';

class FirstSimpleComponent extends Component {
    render(){
        return(
            <div>
                <h2>The First Simple Stateless Component!!!!!</h2>
                <hr/>
                <SecondSimpleComponent></SecondSimpleComponent>
                <hr/>
                <ThisrdSimpleComponent></ThisrdSimpleComponent>
            </div>
        );
    }
}



class SecondSimpleComponent extends Component {
    render(){
        return(
            <div>
                <h2>The Second Simple Stateless Component!!!!!</h2>
            </div>
        );
    }
}


// export the component so that it can be used in other component file as reusable UI
export default FirstSimpleComponent;