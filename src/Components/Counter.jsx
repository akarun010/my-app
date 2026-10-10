import React, { useState } from 'react'

const Counter = ({initialValue}) => {
    const [counter, setCounter] = useState(initialValue);
  return (
    <div className="w-full h-lvh flex justify-center gap-4 flex-col items-center bg-[#6B7280]">
        <h1 className="text-7xl text-[#FFFFFF]">COUNTER</h1>
        <h1 className="text-5xl text-[#EAB308]">{counter}</h1>
        <div className="flex gap-4">
            <button className="bg-[#22C55E] w-10 cursor-pointer p-2 text-white rounded" onClick={() => setCounter(counter => counter + 1)}>+</button>
            <button className="bg-[#EF4444] w-10 p-2 text-white cursor-pointer rounded" onClick={() => setCounter(counter => counter - 1)}>-</button>
            <button className="bg-[#3B82F6] p-2 pr-4 pl-4 text-center rounded text-white cursor-pointer" onClick={() => setCounter(0)}>Reset</button>
        </div>
    </div>
  )
}

export default Counter