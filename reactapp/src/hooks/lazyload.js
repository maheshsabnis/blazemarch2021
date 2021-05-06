import React, { Suspense } from 'react';
 

const App = React.lazy(()=> import('./../hooks/simplefunctionalComponent'));

const LazyComponent=()=>{
 return(
     <div>
         <Suspense fallback={<div>Loading...</div>}>
        <section>
         <App/>
        
        </section>
      </Suspense>
     </div>
 );
};

export default LazyComponent;