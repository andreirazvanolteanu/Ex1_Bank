import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import React from "react";

//const BaseURL = "http://localhost:8090/user/get-all";
const baseURL = "api/user/get-all";

function App() {
  const [count, setCount] = useState(0)

 // axios.defaults.baseURL = "http://localhost:8090";

  /*
  
    */
  React.useEffect(() => {
    
    axios.get("/api/users"
          ).then(res => {setUsers(res.data)})
          .catch(err => console.log(err))
    });
 
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
