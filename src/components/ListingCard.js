import React from "react";

function ListingCard( {listing} ) {

  const myModal= (
    <div id="myModal" className="modal">
      <span className="close cursor"
            onClick={closeModal}>
        &times? 
      </span>
      <div className="modal-content">
        <h1>{listing.name}</h1>
        <img className="card-image" src={listing.image} />
        <h3>{listing.price}</h3>
        <h4>{listing.reviews.map((review) =>  (
                <div>
                  <h5>{review.ratings}</h5>
                  <h6>{review.comment}</h6>
                </div>
        )
        )}
        </h4>
      </div>
    </div>
  )

  console.log(myModal)

  function openModal() {
    return <div style={{display:'block'}}>{myModal}</div>
  }

  function closeModal() {
    return <div style={{display:'none'}}>{myModal}</div>
  }


  return (
    <div className="cards-containers">
      <div className="cards-contents">
        <h1>{listing.name}</h1>
        <img onClick={openModal} className="card-image" src={listing.image} />
      </div>
    </div>
  )
}

export default ListingCard