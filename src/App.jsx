import { useState } from 'react'
import map from './assets/Screenshot 2026-05-06 130623.png'

import HomePage from './HomePage.jsx'
import BusPage from './BusPage.jsx'
import CyclePage from './CyclePage.jsx'
import WalkingPage from './WalkingPage.jsx'
import TrainPage from './Train.jsx'
import CalPage from './CalPage.jsx'

import './App.css'

function App() {
  const [page, setPage] = useState("Home")


  
  return (
    <div className = "app">
      <div className = "sideMenu">
      <button onClick ={() => setPage("Home")}>Home</button>

      <button onClick ={() => setPage("Cycle")}>Cycle</button>

      <button onClick ={() => setPage("Walking")}>Foot</button>

      <button onClick ={() => setPage("Bus")}>Bus</button>

      <button onClick ={() => setPage("Train")}>Train</button>

      <button onClick ={() => setPage("Calc")}>Fare</button>
      </div>
  
      {page === "Home" && <HomePage />}
      {page === "Cycle" && <CyclePage />}
      {page === "Walking" && <WalkingPage />}
      {page === "Bus" && <BusPage />}
      {page === "Train" && <TrainPage />}
      {page === "Calc" && <CalPage />}

    </div>
  );
}


export default App
