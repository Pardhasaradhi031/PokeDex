import React from "react";

const HomePage = () => {
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
          <input type="search" placeholder="Search Pokemon..."/>
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