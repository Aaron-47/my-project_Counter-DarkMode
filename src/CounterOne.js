import React, {useState} from 'react'


const CounterOne = () => {
    const [count, setCount] = useState(0)

  return (
    <div className="dark:bg-black">
      
    <div className="card text-center my-5 dark:bg-black">
      <div className="card-body">
        <div className="my-5">
  
          <h2 className="my-5 dark:text-white"> {count} </h2>
        <button className="btn btn-danger mx-3" onClick={() => setCount(count + 1)}> increment </button>
        <button className="btn btn-success mx-3" onClick={() => setCount(count-1)}> decrement </button>
        <button className="btn btn-primary mx-3" onClick={() => setCount(0)} > reset </button>
        
        </div>
      </div>
    </div>

  </div>
  )
}

export default CounterOne
