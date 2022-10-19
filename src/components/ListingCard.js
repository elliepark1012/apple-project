import React, {useEffect, useState} from "react";
import PopUp from "./PopUp"

function ListingCard( { listing, handleNewReview } ) {
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
                            onAddItem={handleNewReview}
                            /> : null}
            </div>
        </div>
        )     
}

export default ListingCard