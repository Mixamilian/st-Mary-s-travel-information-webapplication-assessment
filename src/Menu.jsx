import React, {useState} from 'react';

function menu(){

    const [page, setPage] = useState("Home");



        return(
            <div>   
                <button onClick = {setPage("Home")}>Home</button>
                <button onClick = {setPage("Cycle")}>Home</button>
                <button onClick = {setPage("Train")}>Home</button>
                <button onClick = {setPage("Walking")}>Home</button>
                <button onClick = {setPage("Calculate")}>Home</button>
            </div>
        )

}

export default menu

