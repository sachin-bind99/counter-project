import { useState } from 'react'

import './App.css'

function App() {
  const [count,setCount]=useState(10);
  const Adding=()=>{
    console.log("updated value :",count);
    setCount(count+1);
  }
  const Removing=()=>{
    console.log("updated value :",count);
    if(count===1){
      setCount(count)
    }
    else
    setCount(count-1)
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-800 shadow-cyan-500 border rounded text-white shadow-2xl">
      <h2 className='text-white '>hello Sachin</h2>
      <h2 className='text-white '>Counter :{count}</h2>
       <div className="flex flex-col items-center gap-4">
      <button onClick={Adding} className="w-48 bg-blue-500 text-white px-4 py-2 rounded">Add Value : {count}</button>
      <button onClick={Removing} className='w-48 bg-red-500 text-white px-4 py-2 rounded'>Remove Value: {count}</button>
      </div>
    </div>
    </div>
    
  )
}

export default App
