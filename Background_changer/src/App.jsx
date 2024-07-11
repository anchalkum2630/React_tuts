import React, { useState,useEffect } from 'react';
function App() {
  const [color,setColor] = useState(localStorage.getItem('color') || "olive");
  useEffect(() => {
    localStorage.setItem('color', color);
  }, [color]);
  return (
    <>
      <div className="duration-200" style={{ backgroundColor: color, border:"3px solid red", height: '100vh', width: '100vw'}}>
         <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
           <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
             <button onClick={()=>{setColor("red")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>red</button>
             <button onClick={()=>{setColor("green")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>green</button>
             <button onClick={()=>{setColor("skyblue")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"skyblue"}}>skyblue</button>
             <button onClick={()=>{setColor("pink")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}>pink</button>
             <button onClick={()=>{setColor("orange")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}}>orange</button>
             <button onClick={()=>{setColor("yellow")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>yellow</button>
             <button onClick={()=>{setColor("grey")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"grey"}}>grey</button>
             <button onClick={()=>{setColor("violet")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"violet"}}>violet</button>
             <button onClick={()=>{setColor("antiquewhite")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"antiquewhite"}}>antiquewhite</button>
             <button onClick={()=>{setColor("indianred")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"indianred"}}>indianred</button>
             <button onClick={()=>{setColor("lightgreen")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"lightgreen"}}>lightgreen</button>
             <button onClick={()=>{setColor("peru")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"peru"}}>peru</button>
             <button onClick={()=>{setColor("royalblue")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"royalblue"}}>royalblue</button>
             <button onClick={()=>{setColor("seagreen")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"seagreen"}}>seagreen</button>
             <button onClick={()=>{setColor("powderblue")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"powderblue"}}>powderblue</button>
           </div>
         </div>
       </div>
    </>
  );
}

export default App;

// import React, { useState } from 'react';

// function App() {
//   const [color, setColor] = useState("olive");

//   return (
//     <div style={{ backgroundColor: color, border:"3px solid red", height: '100vh', width: '100vw'}}>
//       <button
//         className="bg-blue-500 text-white font-bold py-2 px-4 rounded absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         onClick={() => setColor(color === "olive" ? "blue" : "olive")}
//       >
//         Toggle Color
//       </button>
//     </div>
//   );
// }

// export default App;


