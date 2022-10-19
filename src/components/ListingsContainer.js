import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleNewReview }) {

    return (
        <main>
            <ul className="cards">
                {listings.map(listing => (
                    <ListingCard 
                        key={listing.id} 
                        listing={listing}
                        handleNewReview={handleNewReview} />
                ))}
            </ul>
        </main>
    );
}

export default ListingsContainer;