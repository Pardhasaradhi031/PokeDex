import React from "react";
import { capitalizeFirst } from "../../util/TypeImage";

const ProgressBar = ({ stat }) => {
  const getColor = (stat) => {
    if (stat == "hp") return "Red";
    else if (stat == "attack") return "orange";
    else if (stat == "defense") return "blue";
    return "green" 
  }
  return (
    <div className="Bar">
        <div className="stat">
          <span>{capitalizeFirst(stat[0])}</span>
          <span>{stat[1]}/100</span>
        </div>
        <div style={{backgroundColor: "#E5E7EB", height: "100%", borderRadius: "5rem"}}>
          <div className="progress"
            style={{ width: `${stat[1]}%`, backgroundColor: getColor(stat[0])}}
          ></div>
        </div>
      </div>
  )
}

export default ProgressBar;