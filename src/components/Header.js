import React from "react";
import SearchBar from "./SearchBar";

function Header ({ setSearchText }) {

    return (
        <header>
      <SearchBar setSearchText={setSearchText} />
        </header>
    )
}

export default Header;