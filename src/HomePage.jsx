import './App.css'
import map from './assets/Screenshot 2026-05-06 130623.png'

function HomePage(){

    return(
        <div>
            <div className = "title">
                <h1>St Mary's Travel Information Page</h1>
           </div>
            <div className = "wrapper">
                <div className = "mapPhoto">
                    <img src = {map}></img>
                </div>
                <div className = "info">
                    <p> A General Guide for Travel to and around the St Marys' area located in Twickenham London. This page includes information for traveling by foot, bike, bus and Train allowing each of information access for university commutes or just general area discovery.</p>
                    <p>Please Plan your Jorneys!</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;