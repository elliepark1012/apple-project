import React, { useState, useEffect }  from "react";
import '../app.css';
import Header from "./Header";
import NavBar from "./NavBar";
import ListingsContainer from "./ListingsContainer";
import ReviewForm from "./ReviewForm";



function App() {
  const [listings, setListings] = useState([])
  const [searchText, setSearchText] = useState("")


  useEffect(() => {
      fetch("http://localhost:3000/listings")
      .then((r) => r.json())
      .then((listings) => {
        setListings(listings)
      })
    },[])
    
    function handleNewReview(newReview) {
      setListings([...listings, newReview]);
    }

  let searchFilteredItems = listings.filter(listing=> listing.name.toLowerCase().includes(searchText.toLowerCase()))
  return (
      <div className="App">
          <NavBar />
          <Header setSearchText={setSearchText} />
          <ListingsContainer listings={searchFilteredItems} handleNewReview={handleNewReview} />

      </div>
    );
}

export default App;
