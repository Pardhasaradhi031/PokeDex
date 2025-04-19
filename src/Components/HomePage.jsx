import React from "react";
import { useState } from "react";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  }
  const clearSearch = () => {
    setSearchText("");
  }
  return (
    <div className="homeSection">
      <div className="head">
        <h1>Pokémon Collection</h1>
        <p>Explore our extensive collection of Pokémon cards featuring various generations and rarities</p>
      </div>
      <div className="features">
        <div className="searchBar">
          <span class="material-symbols-outlined">
            search
          </span>
          <input type="search" id="searchInput" value={searchText} onChange={handleInputChange} placeholder="Search Pokemon..."/>
          {searchText && <span className="crossButton" onClick={clearSearch}>x</span>}
        </div>
        <div className="cards-feature">
          <button className="cards-feature-btns">Filter</button>
          <button className="cards-feature-btns">Sort By</button>
          <button className="cards-feature-btns">View</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage;