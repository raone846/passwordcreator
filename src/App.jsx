import { useEffect, useCallback, useState } from 'react';
import './App.css'

function App() {
  const [len, setLen] = useState(0);
  const [num, setNum] = useState(false);
  const [sym, setSym] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback( () => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(num) str += "0123456789";
    if(sym) str += "!@#$%^&*()_+[]{}|;:,.<>?";
    let pass = "";
    for(let i = 0; i < len; i++){
      const index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }
    setPassword(pass);
  }, [len, num, sym, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [len, num, sym, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type='text' 
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='generated password'
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={20}
            value={len}
            className='cursor-pointer'
            onChange={(e) => setLen(Number(e.target.value))}
            />
            <label>Length: {len}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              checked={num}
              id='numberInput'
              onChange={() => {
                setNum((prev) => !prev);
              }}
             />
             <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              checked={sym}
              id='symbolInput'
              onChange={() => {
                setSym((prev) => !prev);
              }}
             />
             <label>Symbol</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
