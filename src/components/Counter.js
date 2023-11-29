import React from 'react'
import { useState } from 'react';

export default function Counter() {

    const [count, setCount]=useState(0)
  
    function handleAdd(){
      setCount(count+1)
    }
  
    function handleSub(){
      setCount(count-1)
    }
    function handleReset(){
      setCount(0)
    }
  return (
    <div>
        <div className='counter'>
            <button onClick={handleSub}>Subtract</button>
            <h2>{count}</h2>
            <button onClick={handleAdd}>Add</button>
        </div>
        <hr />
        <div className='center-reset'>
            <button onClick={handleReset} className='reset'>Reset Counter</button>
        </div>      
    </div>
  )
}
