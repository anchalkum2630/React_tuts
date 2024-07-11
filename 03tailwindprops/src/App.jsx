import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  // let myObj={
  //   username:"anchal",
  //   age:21
  // }
  let note1={
    note:"life is not easy,we have to struggle"
  }
  let note2={
    note:"with our hardwork we can make it easy"
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      {/* <Card channel="chaiaurcode" someObj={myObj}/> */}
      <Card username="Anchal" post={note1}/>
      <Card username="Roshni" post={note2}/>
      <Card username="Ronak"/>
    </>
  )
}

export default App
