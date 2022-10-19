import React from "react";
import ReviewForm from "./ReviewForm"

function PopUp({listing, toggle} ) {
    const handleClick = () => {
        return (toggle());
    };
    console.log(listing)

const arrAvg = arr => {return arr.reduce((a, b) => a + b, 0) /arr.length};
    const getAvgRating =
    listing.reviews.length > 0 ? 
    arrAvg(listing.reviews.map(review => review.ratings)).toFixed(2) : 0;
    console.log(getAvgRating)

        return (
            <div className="modal">
              <div className="modal_content">
              <div 
                          key={listing.id} 
                          className="modal-content">
                        <div className="modal-top">
                        <h1>{listing.name}</h1>
                        <img className="modal-image" src={listing.image} />

                        </div>
                        <div className="review">
                        <h2>$ {listing.price}</h2>
                        <h2 className='review-averating'>{getAvgRating} out of 5</h2>
                        {listing.reviews.map((review) =>  (
                            <div key={review.comments}>
                                <h3 className="review-rating">{review.ratings}</h3>
                                <h4 className="review-comments">Comments : {review.comments}</h4>
                             </div>))}
                        </div>
                        <ReviewForm />
                        </div>
                <span className="close" 
                      onClick={handleClick}>
                        &times;
                </span>
                <p>Sunnyyyyyy dayyy</p>
              </div>
          </div>
        );
    }

export default PopUp;