import React from 'react'
import useCounter from './useCounter'



function CounterTwo() {
  const [count, setCount, increment, decrement, reset] = useCounter(0)


  return (
    <div>
         <div className="head_class">
          <div className="second_class">
    
            <h2 className="my-5 text-align:center"> {count} </h2>
          <button className=" bg-blue-600 text-white rounded px-4 py-2 " onClick={increment}> increment </button>
          <button className="bg-red-600 text-white rounded px-4 py-2 " onClick={decrement}> decrement </button>
          <button className="bg-green-600 text-white rounded px-4 py-2 " onClick={reset} > reset </button> <br /> <br />
          <input className=" dark:text-black "
          type='text'
          required
          onChange={(e) => setCount(e.target.value)}
          value = {count}
          />
          
          </div>
        </div>
    </div>
  )
}

export default CounterTwo
    