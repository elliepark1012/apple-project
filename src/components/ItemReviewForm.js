import React from "react";

function ItemReviewFrom() {
    return (
        <div id="form">
            <form>
                <label>Ratings</label>
                <input type="number" id="ratings" />
                <label>Write a Reivew</label>
                <textarea type="text" id="ratings" />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default ItemReviewFrom;