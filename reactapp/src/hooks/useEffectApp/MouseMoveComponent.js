import React, { useEffect,useState } from 'react';

const MouseMoveComponent=()=>{

    const [x,setX]= useState(0);
    const [y,setY]= useState(0);

    const getMousePositions=(evt)=>{
        setX(evt.clientX);
        setY(evt.clientY);
    };  

    useEffect(()=>{
        // code for ounting
        console.log('Mouse Move Called');
        window.addEventListener('mousemove', getMousePositions);
        // code for unmounting
        return ()=>{
            console.log('Component is unmounted');
            window.removeEventListener('mousemove', getMousePositions);
        }
    },[]);


    return (
        <div>
            x = {x} &&& y = {y}
        </div>
    );
};

export default MouseMoveComponent;