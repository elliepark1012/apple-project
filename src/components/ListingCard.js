import React, {useState} from 'react';

function ListingCard( {listing, children, Wrapper = 'div'} ) {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    };
    
    const main = (
        <div key={listing.id} className="cards-containers">
            <div className="cards-contents">
                <h1>{listing.name}</h1>
                <img className="card-image" src={listing.image} />
            </div>
        </div>
        )

    const lightbox = (
                <div key={listing.id} className="modal-content">
                    <h1>{listing.name}</h1>
                    <img className="card-image" src={listing.image} />
                    <h3>{listing.price}</h3>
                    {listing.reviews.map((review) =>  (
                        <div key={review.comment}>
                            <h5>{review.ratings}</h5>
                            <h6>{review.comment}</h6>
                         </div>))}
                    </div>
                    )  

    return (
        <Wrapper>
            {children}
            {lightbox}
        </Wrapper>
    );
};

export default ListingCard;

