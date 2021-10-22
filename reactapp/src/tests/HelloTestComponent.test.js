import React from 'react';
import { render,unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import HelloTestComponent from './../componentfortest/HelloTestComponent';

// import the render and unmountComponentAtNode methods from react-dom
// these methos will amange inmemory DOM rendering

// import the 'act' for 'Acting' onn Unit Test, this is 'act' from 'arrange', 'act' and 'assert' of Unit Test

// import component to test

// create a test suit
// test suit is the logical container for multiple test cases
describe('Test Suit for Tetsing the React.js Component', () => {
   // define a global varibale that will be scopped for the current suite
   let domContainer =null;
   // initialization of all objects required for each test case 
   beforeEach(()=>{
       // define a DOM container element in which the component will render
       domContainer = document.createElement('div');
       // applend it in the Body of DOM Tree
       document.body.appendChild(domContainer);
   });

   // write the test case
   it('render the Component without the message passed to it',()=>{
        // start tendering in act
        act(()=>{
            render(<HelloTestComponent/>, domContainer);
        });
        // expect the execution
        expect(domContainer.textContent).toBe("Hello, Mr. UnKnown");
   });


   // write a test that will pass the data to the component

    it('render the Component with the message passed to it',()=>{
            // start tendering in act
            act(()=>{
                render(<HelloTestComponent message="Mr. Mahesh"/>, domContainer);
            });
            // expect the execution
            expect(domContainer.textContent).toBe("Hello, Mr. Mahesh");
    });


    // clean up the initialization
    afterEach(()=>{
        // unload the container from DOM
        unmountComponentAtNode(domContainer);
        // remove it
        domContainer.remove();
        domContainer = null; // release it from memory
    });  

});
