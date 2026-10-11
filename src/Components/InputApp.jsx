import React, { useRef, useState } from 'react'

const InputApp = () => {
    const inputRef = useRef();
    const handleFocus = () => {
        inputRef.current.focus();
    }
    const handleClear = () => {
        inputRef.current.value = "";
        setInputValue(null);
    }
    const [inputValue, setInputValue] = useState(null);
    const getInput = () => {
        setInputValue(inputRef.current.value); 
    }
  return (
    <div className="w-full h-lvh flex-col flex items-center bg-[#E5E7EB] justify-center">
        <h1 className="text-3xl m-4">Focus Input</h1>
        <p className="text-lg m-2">Build an input box with buttons to focus it, clear it, and display its value.</p>
        <div className="flex flex-col p-3 rounded-2xl gap-4 bg-white">
            <input className="outline-0" value={inputValue} onChange={getInput} type="text" ref={inputRef}/>
            {inputValue && <p>{inputValue}</p>}
            <div className="flex p-7 rounded-2xl gap-4 bg-white">
                <button className="bg-[#2563EB] cursor-pointer text-white rounded-lg p-2" onClick={handleFocus}>Focus</button>
                <button className="bg-red-600 cursor-pointer text-white rounded-lg p-2" onClick={handleClear}>Clear</button>
            </div>
        </div>
    </div>
  )
}

export default InputApp