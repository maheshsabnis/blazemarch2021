import React, {Suspense} from 'react';

// Using the Lazy IO Operations inside the current Bundle on Client Side
const LazyComponent = React.lazy(()=>import('./../../customhooks/customHookComponent'));
const LazyLoadingComponent=()=>{
    return(
        <div>
            <h1>Lazy loading of the Component</h1>
            <Suspense fallback={<div>Loading the Component ....</div>}>
                <LazyComponent></LazyComponent>
            </Suspense>
        </div>
    );
};

export default LazyLoadingComponent;
