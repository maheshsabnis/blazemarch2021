import React, { useState } from 'react'
import MouseMoveComponent from './MouseMoveComponent';

const ToggleCompoent=()=>{
    const [display, canDisplay] = useState(true);

    return (
        <div>
            <h1>The Demo to Explqain USe Effect</h1>
            <button onClick={()=>canDisplay(!display)}>Toggle</button>
            {
                display && <MouseMoveComponent></MouseMoveComponent>
            }
            <hr/>
            <div>
                <strong>
                    The toggle Component
                </strong>
            </div>
        </div>
    );
};

export default ToggleCompoent;