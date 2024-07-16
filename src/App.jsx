import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>Hi
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl text-white">
          <button onClick={()=>setcolor("yellow")} className='outline-none px-4 bg-yellow-500 rounded-2xl py-1 decoration-white text-w'>Yellow</button>
          <button onClick={()=>setcolor("black")} className='outline-none px-4 bg-black rounded-2xl py-1 decoration-white text-w'>Black </button>
          <button onClick={()=>setcolor("orange")} className='outline-none px-4 bg-orange-500 rounded-2xl py-1 decoration-white text-w'>Orange</button>
          <button onClick={()=>setcolor("green")} className='outline-none px-4 bg-green-500 rounded-2xl py-1 decoration-white text-w'>Green</button>
          <button onClick={()=>setcolor("red")} className='outline-none px-4 bg-red-500 rounded-2xl py-1 decoration-white text-w'>Red</button>
          <button onClick={()=>setcolor("blue")} className='outline-none px-4 bg-blue-500 rounded-2xl py-1 decoration-white text-w'>Blue</button>
          <button onClick={()=>setcolor("purple")} className='outline-none px-4 bg-purple-500  rounded-2xl py-1 decoration-white text-w'>Purple</button>
        </div>

      </div>
    </div>
  </>
  )
}

export default App