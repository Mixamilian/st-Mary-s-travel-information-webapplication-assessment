import { useState } from 'react';
import './App.css'

function CalPage(){

    const[option, setTravel] = useState("");
    const[distance, setDistance] = useState("");
    const[cost, setCost] = useState("0");

    const calFare = () => {

        const out = Number(distance) * Number(option);
        setCost(out);
    }
    
    return(
        <div>
            <div className = "title">
                <h1>Calculate Fare</h1>
           </div>
           <forum className = "fare">
            <label for = "travelType">Select a travel Type--</label>
            <select value={option} onChange={(e) => setTravel(e.target.value)}>
                <option value = "0" selected >Select Box</option>
                <option value = "3">Train</option>
                <option value = "2">Bus</option>
            </select>
            <label>Enter distance in km--</label>
            <input type = "number" value = {distance} onChange = {(e) => setDistance(e.target.value)}></input>
            <button onClick = {calFare}>Submit</button>
           </forum>
           <div className = "output">
                <p>Fare Estimation is £{cost}</p>
           </div>
        </div>
    )
}

export default CalPage;