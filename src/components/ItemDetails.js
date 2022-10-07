import React from "react";

function ItemDetails({ items }) {

  console.log(items)
    if (items.length === 0) return null;
  return (
    <div className="cards" > 
      {items.map((item) => {
        return(<div key={item.name} className="cards-contents">
          {/* <h2>{item.name}</h2>
          <img className="item-image" src={item.image} /> */}
          <h3>${item.price}</h3>
          <h4>{item.spec}</h4>
          {
            item.reviews && item.reviews.map(rev => 
            <div key={rev.comments  }>
            <h4>{rev.ratings}</h4>
            <h5>{rev.comments}</h5>
            </div>)
          }
      </div>)}
      )}
    </div>
  )
}

export default ItemDetails