import React from 'react'

import { useState } from 'react';


const Counter = () => {

   let  [v, setv] = useState(0);

     
    const inc = () => {
        setv(v + 1);
    }

    const dec = () => {
        if (v === 0) {
            alert('value on zero')
        }
        setv(v - 1);

    }

   

    return (
        <div className='App'>
        <div className="container">
            <h1 className='text-center text-4xl'>{v}
            </h1>

            <div id='btn'>
                <span onClick={dec}>-</span>
                <span  onClick={inc}>+</span>
            </div>
        </div>
        </div>

       
    );
}


export default Counter;
