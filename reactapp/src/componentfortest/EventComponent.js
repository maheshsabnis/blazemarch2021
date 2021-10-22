import React,{useState} from 'react';

const EventComponent=(props)=>{
    const [value, setValue] = useState(false);
    // the button emit onChange Event which may be listened by the parent component
    return (
        <div>
            <button
            onClick={()=>{
                setValue(previousState => !previousState);
            }}>
                {value === true? "Update": "Save"}
            </button>
            <div className="dv">{value.toString()}</div>
        </div>
    );

};

export default EventComponent;


