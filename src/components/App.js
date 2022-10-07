import React, { useState, useEffect }  from "react";
import '../app.css';
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import ItemCards from "./ItemCards";
import ItemDetails from "./ItemDetails";
import ItemReviewForm from "./ItemReviewForm";



function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
      fetch("http://localhost:3000/items")
      .then((r) => r.json())
      .then((items) => {
        setItems(items)
      })
    },[])
  
  return (
      <div className="App">
         <NavBar />
         <SearchBar />
         <ItemCards items={items} />
         <ItemDetails items={items} /> 
         <ItemReviewForm /> 
      </div>
    );
}

export default App;
