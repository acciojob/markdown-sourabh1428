import React, { useState } from 'react'
import Welcome from './welcome'


export default function App() {
  let[name,setName]=useState('');
  let[change,setChange]=useState('');
  let[show,setShow]=useState(false);
  function handleChange(event){
    setChange(event.target.value);
  }
  function handleClick(event){
    setName(change);
    setShow(1);
  }


    return (
    <div>
        <input type="text" value={change} onChange={handleChange}/>
        <button onClick={handleClick}>Login</button>
        {show?(<Welcome name={name}/>):null}


    </div>
  )
}
