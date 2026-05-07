import './App.css'

function BusPage(){

    return(
        <div>
            <div className = "title">
                <h1>Bus Travel Information Page</h1>
           </div>
            <div className = "wrapper">
                <div className = "info">

                    <p>The Twickenham bus service is generally considered one of the better suburban bus networks which links with other areas such as Richmond, Hounslow, Kingston upon Thames, Hammersmith and Heathrow Airport. this Bus Network is Part of the 'Transport for London' system. Main key routes include the; 110 which connects hounslow, Twickenham Stadium, Richmod and Hammersmith, 290 which connects Twickenham with Staines and 490 which connect Heathrow terminal 5 with Richmond. </p>
                    <h4>Benefits</h4>
                    <p>This Large bus network provides strong geographical Links around the london area as farly cheap prices without actualy having to travel to central London. This bus Fare is also extremely cheap at around 0.15p perKm with an Adult Single between Twickenham and Stains Costing only £2. This makes Saving much easier for Students and Travel quick with a reduced carbon emittion due to not using your own car. This bus Service are also extremely fast and reliable with Buses' usually run every 10-20 minutes during the day and evening whilst also running some late at night. </p>
                    <h4>Limitations</h4>
                    <p>The main Limitation with these Bus services are the heavy traffic Congestures during rush hour as Twickenham London is an extremely populated place. Other Times this may be an issue is when Concerts or Rugby Matches hapen in Twickenham Stadium which casues queues to be extremely long. For Longer Trips, bus services in twickenham may take longer than rail services as ther has been some frequency reductions happening across London causing bus Delay.</p>
                      <a href="https://tfl.gov.uk/maps/bus?Input=Twickenham%20Rail%20Station&InputGeolocation=51.450031,-0.330394" target = "_blank"> Visit Transport For London for more bus service information int the twickenham area</a>

                </div>
           </div>
        </div>
    )
}

export default BusPage;