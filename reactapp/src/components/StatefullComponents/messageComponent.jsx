import React,{Component} from 'react';

class MessageComponent extends Component {
    // the 'props' parameter to the ctor represent that the 
    // current component is subscriben to 'props' when the instance of the current component is created
    constructor(props){
        super(props);
        this.state  ={
            localMessage: 'The Message in Local State of the Component',
            myParentMessage:this.props.msg
        };
    }
    render(){
        return(
            <div className="container">
                 <h2>The State Full Component</h2>
                 <div className="form-group">
                     <strong>
                         Value Received from the Parent is = 
                         <hr/>
                         {this.props.msg}
                         <hr/>
                         {this.props.msg1}
                     </strong>
                 </div>
                 <hr/>
                 {/* Passing the state of the current component ot its child*/}
                 <MyChildComponent info={this.state.localMessage} newmsg={this.state.myParentMessage}></MyChildComponent>
            </div>
        );
    }
}

class MyChildComponent extends Component {
    render(){
        return(
            <div className="container">
                <h3>The Child Component</h3>
                <div className="container">
                    <strong>
                        Data Received from Message Component is
                        <hr/>
                        {this.props.info}
                        <hr/>
                        {this.props.newmsg}
                    </strong>
                </div>
            </div> 
        );
    }
}


export default MessageComponent;