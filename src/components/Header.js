import React from "react";
import SearchBar from "./SearchBar";

function Header ({ setSearchText }) {

    return (
        <header>
        {/* <h1>
            <img className="logo" src="/images/logo_transparent.png"/>
        </h1> */}
      <SearchBar setSearchText={setSearchText} />
        </header>
    )
}

export default Header;