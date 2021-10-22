import React, { Component } from 'react'

class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            value:0
        };
        console.log(`COnstructor of the Parent is executed`);
    }
    updateValue=(evt)=>{
        this.setState({value:parseInt(evt.target.value)});
    }
    componentDidUpdate=()=>{
        console.log(`Compoennt did update on Parent Component is invoked`);
    }
    render() { 
        console.log(`Rendering of Parent Component`);
        if(this.state.value % 2 ===0){
            return(
                <div className="contaier">
                    <h1>The Parent Component</h1>
                    <input type="text" value={this.state.value}
                     onChange={this.updateValue.bind(this)}/>
                     <strong>Showing Even Component</strong>
                     <EvenComponent></EvenComponent>
                </div>
            );
        } else {
        return (  
            <div className="contaier">
                 <div className="contaier">
                    <h1>The Parent Component</h1>
                    <input type="text" value={this.state.value}
                     onChange={this.updateValue.bind(this)}/>
                      <strong>Showing Odd Component</strong>
                     <OddComponent data={this.state.value}></OddComponent>
                </div>
            </div>
        );
     }
    }
}


class EvenComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            x:0,
            y:0
        };

        console.log(`Even Component Constructor called`);

        // subscribing the event for global object (window) object
        // ins constructor
        // this will generate runtime Warnings for BUGS because the
        // constrctorm only executes the COmponent intialization bu the
        // component mounting(?) is still  not completed 
       // window.addEventListener('mousemove', this.getMousePositions);
    }

    componentDidMount=()=>{
        console.log(`Even Component Did Mount`);
        window.addEventListener('mousemove', this.getMousePositions);
    }

    // will be invoked for each state / props changes
    componentDidUpdate=()=>{
       console.log(`Even Component Did Update is invoked`);
    }

    componentWillUnmount=()=>{
        console.log(`Even Component is unmounted`);
        // release all event handlers
        window.removeEventListener('mousemove', this.getMousePositions);
    }
    getMousePositions=(evt)=>{
        this.setState({x:evt.clientX});
        this.setState({y:evt.clientY});
        console.log(`Mouse Move x=${this.state.x} && y=${this.state.y}`);
    }

    render(){
        console.log(`Rendering of Even Component`);
       return( <div className="container">
            <strong>
                x = {this.state.x} and y = {this.state.y}
            </strong>
        </div>); 
    }
}

class OddComponent extends Component {
    constructor(props){
        super(props);
        console.log(`COnstructor of Odd COmponent is invoked`);
    }
    // will be invoked for each state / props changes
    componentDidUpdate=()=>{
        console.log(`Odd Component Did Update is invoked`);
     }

     componentDidMount=()=>{
        console.log(`Odd Component Did Mount`);
        
    }

     componentWillUnmount=()=>{
        console.log(`Odd Component is unmounted`);
    }
    render(){
        console.log(`Render of Odd Component in Invoked`);
        return (
            <div className="container">
                <strong>
                    Value Received from Parent = {this.props.data}
                </strong>
            </div>
        );
    }
}
 
export default LifecycleComponent;