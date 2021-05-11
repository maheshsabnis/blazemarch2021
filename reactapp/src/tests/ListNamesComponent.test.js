import React from 'react';
import { shallow,mount } from "./../enzyme";
import ListOptionsComponent from './../componentfortest/ListOptionsComponent';
import ListNamesComponent from './../componentfortest/ListNamesComponent';

describe('Testing React Components using Enzyme', () => {
    // the test case
    it('should render the list based on names array',()=>{
        // arrange of the data
         const characters = ["James", "Indiana", "Ethan", "Jack"];
        
        // act
        const domTree = shallow(<ListNamesComponent names={characters}/>);
        // simulate the DOM Tree
        console.log(domTree.debug());
        // assertion
       expect(domTree.find('.names').exists()).toBe(true);
       // expect(domTree.contains('li')).toBe(true);
    });
    
    it('should render the empty span when the names array is empty',()=>{
        // arrange of the data
         const characters = [];
        // act
        const domTree = shallow(<ListNamesComponent names={characters}/>);
        // simulate the DOM Tree
        console.log(domTree.debug());
        // assertion
        expect(domTree.find('.empty').exists()).toBe(true);
    });

    it('should render the DOM element with class as the value from names array',()=>{
        // arrange of the data
        const characters = ["James", "Indiana", "Ethan", "Jack"];
        // act
        const domTree = shallow(<ListOptionsComponent value={characters[0]}/>);
        // simulate the DOM Tree
        console.log(domTree.debug());
        // assertion
        expect(domTree.find('.James').exists()).toBe(true);
    });


    // it('should render the list based on names array',()=>{
    //     // arrange of the data
    //      const characters = ["James", "Indiana", "Ethan", "Jack"];
        
    //     // act
    //     const domTree = mount(<ListNamesComponent names={characters}/>);
    //     // trying to read the props for the child
    //     expect(domTree.props().value).to.equal('James');
        
    // });
});
