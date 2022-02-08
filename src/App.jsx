import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {


  return (
    <div className="App">
     
        <Stopfun/> 
          
    </div>
  )
}


const Stopfun = () => {

  const [count, setCount] = useState(0);

  const puse = useRef()

  useEffect(() => {

    start()

  }, [])

  const start = () => {
    puse.current =  setInterval(() => {
  
      setCount((p) => p+1);
  
  }, 1000);

  }


  return(
    <div>
      <h1>{count}</h1>

      <button
      onClick={() => {

        clearInterval(puse.current)


      }}
      >Puse</button>
      <button onClick={() => {
        start()
      }}>Start</button>

      <button onClick={() => {
           setCount(0)
           clearInterval(puse.current)

      }}>Reset</button>
    </div>
  )






}

export default App
