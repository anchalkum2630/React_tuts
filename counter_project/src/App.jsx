import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// {usestate } is a hook , it is for updating or change the state

function App() {
  let[counter,setCounter]=useState(0)
  const addvalue=()=>{
    // const target=document.querySelector("h2");
    if(counter<20&&counter>=0){
      setCounter(counter+1)
    }

  }
  const removevalue=()=>{
    if(counter<=20&&counter>0){
      // setCounter(counter-1)
      // setCounter(counter-1)
      // setCounter(counter-1) it wil decrease by one number it go in batches
      // to decrease the element by three
      // setCounter(counter=>counter-1)
      // setCounter(counter=>counter-1)
      // setCounter(counter=>counter-1)  this works as function one by one it is decreasing

    }
  }
  return (
    <>
      <h1>React counter project</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}
export default App
