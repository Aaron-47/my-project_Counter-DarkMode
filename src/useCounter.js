import {useState} from 'react'

function useCounter(initialCount = 1) {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount( prevCount => prevCount + 1 )
    } 
    const decrement = () => {
        setCount(prevCount => prevCount - 1 )
    } 
    const reset = () => {
        setCount(initialCount)
    } 

  return [count, setCount, increment, decrement, reset]
}

export default useCounter
