import { useState } from 'react'
import map from './assets/Screenshot 2026-05-06 130623.png'
import Menu from './Menu.jsx'
import './App.css'

function App() {
  const [page, setPage] = useState("Home")

  
  return (
    <body>
      <div class = "sideMenu">
      <button>Home</button>

      <button>Cycle</button>

      <button>Walking</button>

      <button>Bus</button>

      <button>train</button>

      <button>Calculate</button>
      </div>
    </body>
  );
}


export default App
