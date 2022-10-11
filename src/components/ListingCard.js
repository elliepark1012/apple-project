import React from "react";
import LightBox from "./LightBox";

function ListingCard( { listing } ) {
    return (
        <div key={listing.id} className="cards-containers">
            <div className="cards-contents">
                <h1>{listing.name}</h1>
                <LightBox listing={listing}>
                <img className="card-image" src={listing.image} />
                </LightBox>
            </div>
        </div>
        )     
}

export default ListingCard