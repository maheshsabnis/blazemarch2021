import React from 'react';
import {usePromise} from './usePromise';

const CustomHookComponet=()=>{
    const data = usePromise('http://localhost:9001/api/departments');
    const data1 = usePromise('https://apiapptrainingnewapp.azurewebsites.net/api/products');
    if(data1 === undefined) {
        return(
            <div>Noe Record Received.....</div>
        );
    }
    return(
        <div>
            <h2>Received data</h2>
            <ul>
                {
                    data1.map((d,i)=>(
                        <li key={i}>
                            {JSON.stringify(d)}
                        </li>
                    ))
                }
            </ul>
        </div>

    );
};

export default CustomHookComponet;