import React, {useEffect, useState} from "react";
import PopUp from "./PopUp"

function ListingCard( { listing } ) {
    const [seen, setSeen] = useState(false)

    const togglePop = () => {
        setSeen(!seen)
    }

    return (
        <div key={listing.id} className="cards-containers">
            <div className="cards-contents">
                <h1>{listing.name}</h1>
                <img className="card-image" 
                     src={listing.image} 
                     onClick={togglePop}
                     />
                {seen? <PopUp 
                            listing={listing} 
                            toggle={togglePop} 
                            
                            /> : null}
            </div>
        </div>
        )     
}

export default ListingCard