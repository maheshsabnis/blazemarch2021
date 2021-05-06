import React from 'react';
// importing the file as standard ES 6 Syntax, SYnchronous loads
import * as utilities from './operations';


const ImportingComponent=()=>{
    const arr1 = utilities.reverse([4,5,3,4,1]);
    const arr2 = utilities.sort([4,5,3,4,1]);

    // use Web Pack module loader feature to import the module asynchronously using
    // import() function object
    import('./operations').then((obj)=>{
        console.log(obj.sort([5,4,3,2,1]));
    }).then((err)=>{
        console.log(`Error Occured ${err}`);
    });


    return(
        <div>
            {arr1}
            <hr/>
            {arr2}
        </div>
    );
};

export default ImportingComponent;
