import React, { useState } from "react";

function SearchBar( {setSearchText} ) {


  function handleSubmit(event) {
    event.preventDefault();
    // filterListings(searchText)
  }

  return (
    <div id="wrap" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <img className="logo" src="/images/logo_transparent.png"/>
        <form action="" onSubmit={handleSubmit}>
        <input id="search" 
               name="search" 
               type="text" 
               placeholder="What're we looking for ?"
               onChange={(e) => setSearchText(e.target.value)} 

               />
        <input id="search_submit" value="Rechercher" type="submit" />
        <input type="submit" value="Click" />
        </form>
    </div> 
      )
  }

  
  export default SearchBar; 