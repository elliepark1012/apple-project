import React from "react";

function SearchBar() {
    return (
      <div id="wrap">
          <form action="" autocomplete="on">
          <input id="search" name="search" type="text" placeholder="What're we looking for ?" />
          <input id="search_submit" value="Rechercher" type="submit" />
          <input type="submit" value="Click" />
          </form>
      </div> 
        )
  }

  export default SearchBar; 