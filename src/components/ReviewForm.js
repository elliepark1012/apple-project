import { borderRadius } from '@mui/system';
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const colors = {
    orange : "#FFBA5A",
    grey: "A9A9A9"
}

const styles = {
    container : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        padding: "30px",
        fontSize: "60px"
    },
    textarea : {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 600,
        margin: "20px 0",
        padding : 10,
        fontSize : "30px",
    },
    button : {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 600,
        padding : 10,
        fontSize : "30px"
    }
}

function ReviewForm( { onAddReview }) {
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    // const [comments, setComments] = useState("");

    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleMouseOver = value => {
        setHoverValue(value)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const reviewData = {
    //         ratings : currentValue,
    //         comments : comments
    //     };
    //     console.log(reviewData)
    //     fetch("http://localhost:3000/listings", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type" : "application/json",
    //     },
    //     body:JSON.stringify(reviewData),
    // })
    //     .then((r) => r.json())
    //     .then((newReview) => onAddReview(newReview));
    // };


    return (
        <form>
        <div style={styles.container}>
            <h2>Review Section</h2>
            <div style={styles.stars}>
              {stars.map((_, index) => {
                return (
                    <FaStar
                        key={index}
                        size={60}
                        style={{
                            marginRight: 10,
                            cursor: "pointer"
                        }}
                        colozzr={(hoverValue || currentValue) > index ? colors.orange : colors.grey} 
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                    />
                )
              })}  
            </div>
            <textarea 
                placeholder="What's your feedback"
                style={styles.textarea}
            />
            <button 
                style={styles.button}>Submit</button>
        </div>
        </form>
    )
}

export default ReviewForm;