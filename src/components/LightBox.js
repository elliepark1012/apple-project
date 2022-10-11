    import React, {useState} from 'react';

    const LightBox = ({ listing, children, Wrapper = 'div' }) => {

        const [ isOpen, setIsOpen ] = useState(false);

        const toggleIsOpen = () => {
            setIsOpen(!isOpen)
        };
        
        return (
            <Wrapper onClick={toggleIsOpen}>
                {children}
                {isOpen?
                    (
                     <div onClick={toggleIsOpen} 
                          key={listing.id} 
                          className="modal-content">
                        <div className="modal-top">
                        <h1>{listing.name}</h1>
                        <img src={listing.image} />
                        </div>
                        <div className="review">
                        <h2>$ {listing.price}</h2>
                        {listing.reviews.map((review) =>  (
                            <div key={review.comments}>
                                <h3 className="review-rating">{review.ratings}</h3>
                                <h4 className="review-comments">Comments : {review.comments}</h4>
                             </div>))}
                        </div>
                        </div>
                        ) :
                        null}
            </Wrapper>
        );
    };

    export default LightBox;

