import React from "react";
import ProgressBar from "./ProgressBar";
import { capitalizeFirst, getPokemonTypeImage } from "../../util/TypeImage";

const StatsBar = ({ data, type }) => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
      <div className="PokemonTypes">{type.map((t, index) => <span key={index} style={{marginRight: "1rem"}}>{getPokemonTypeImage(t)} {capitalizeFirst(t)} Type</span>)}</div>
      {Object.entries(data).map((stat, index) =>
        <ProgressBar key={index} stat={stat} />
      )}
      </div>
  );
};

export default StatsBar;
