// import logo from './logo.svg';
import { useEffect,useState } from 'react';
import './App.css';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';
 

    export default function App() {
      const [darkMode, setDarkMode] = useState(false)

      useEffect(() => {
        if (darkMode){
          document.documentElement.classList.add("dark")  
        }
        else {
          document.documentElement.classList.remove("dark")  
        }
         
      },[darkMode]);
      

      return (
        <div className="w-screen h-screen flex items-center justify-center flex-col dark:bg-black dark:text-white">
          <CounterOne/>
          <CounterTwo/>
          <button onClick={() => setDarkMode(!darkMode)} className="absolute right-10 top-10 bg-black text-white px-5 py-3 rounded hover:bg-stone-700 dark:bg-white dark:text-black"> {darkMode ? "Light":"Dark" } Mode </button>
          <p className=" w-[50%] text-xl text-align:center"> This is a counter App with the dark mode enabled option.  </p> 
        </div>
        )
    }


