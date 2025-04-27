import React from "react";
import StatsBar from "./StatsBar";

const PokemonStatsCard = ({ data, type }) => {
  return (
    <div className="statsWrapper">
      <StatsBar data={data} type={type} />
    </div>
  );
}

export default PokemonStatsCard;