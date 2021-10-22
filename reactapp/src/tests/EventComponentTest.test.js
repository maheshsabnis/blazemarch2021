import React from 'react';
import { render,unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import EventComponent from './../componentfortest/EventComponent';

describe('Test Suit for Tetsing the React.js Component', () => {
    let domContainer =null;
    beforeEach(()=>{
        domContainer = document.createElement('div');
        document.body.appendChild(domContainer);
    });
 
    // write the test case
    it('button must change its value property for each click on it',()=>{
       act(()=>{
        render(<EventComponent/>, domContainer);
       });

       // detect the button element in the DOM Tree created in memory
       const button = document.querySelector('button');
       // search by class Name
       const div = document.querySelector('.dv');
       // expectation for the inisitl rendering of the Button to Save
       expect(button.innerHTML).toBe('Save');
       expect(div.innerHTML).toBe('false');

       // displatch the click event on the button on the DOM Tree  inside Memory

       act(()=>{
           button.dispatchEvent(new MouseEvent('click', {bubbles:true}));
       });

       // check if the state changes
       expect(button.innerHTML).toBe('Update');
       expect(div.innerHTML).toBe('true');
       
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
 