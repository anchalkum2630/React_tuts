import { useState,useCallback, useEffect,useRef } from 'react'
function App() {
  const [length,setLength] = useState(8)
  const [numberallowed,setNumberallowed]=useState(false)
  const [charallowed,setCharacterallowed]=useState(false)
  const [password,setPassword]=useState("")
  //useref
  const passwordRef=useRef(null)


  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed){
      str+="0123456789"
    }
    if(charallowed){
      str+="~`!@#$%^&*(){}[]_-"
    }
    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      console.log(pass)
    }
    setPassword(pass)

  },[length,numberallowed,charallowed,setPassword])
  //above is opitimise and down is to run again

  const copyPassword=useCallback(()=>{
     passwordRef.current?.select()
    //for range  passwordRef.current?.selectSelectionRange(0,8);
     window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberallowed,charallowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
           <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder='passoword' readOnly ref={passwordRef}/>

           <button className='bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 active:bg-blue-900' onClick={copyPassword}>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
             <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
             <label>Length: {length}</label>
             <div className="flex items-center gap-x-1">
               <input type="checkbox" defaultChecked={numberallowed} onChange={()=>{setNumberallowed((prev)=>!prev);}}/>
               <label htmlFor='numberInput'>Numbers</label>

               <input type="checkbox" defaultChecked={charallowed} onChange={()=>{setCharacterallowed((prev)=>!prev);}}/>
               <label htmlFor='characterInput'>Characters</label>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
