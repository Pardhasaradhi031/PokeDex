import React, { useState, useEffect } from "react";
import { getPokemonTypeImage, capitalizeFirst} from "../util/TypeImage";
import { Link } from "react-router-dom";

const PokemonCard = ({ name }) => {
  const [pokemonDetails, setPokemonDetails] = useState({
    name: "",
    image: null,
    type: [],
    hp: "",
  });

  useEffect(() => {
    const fetchPokemon = async () => {
    try {
      const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemonDetails({
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        type: data.types.map(type => type.type.name),
        hp: data.stats[0].base_stat,
      })
      return () => {console.log("Finished Fetching!");}
    } catch (err) {
      console.log(err);
    }
  }
  fetchPokemon();
  }, [name])
  return (
    <div className="PokemonCard">
      <div className="PokemonImage">
        <img src={pokemonDetails.image} />
      </div>
      <div className="PokemonDetails">
        <span className="PokemonName">{pokemonDetails.name.toUpperCase()}</span>
        <div className="PokemonStats">
          <div className="PokemonTypes">
            {pokemonDetails.type.map((type, index) => (
              <span key={index}>
                {getPokemonTypeImage(type)} {capitalizeFirst(type)}
              </span>
            ))}
          </div>
        <span style={{position: "relative", left: "5rem"}}>❤️HP: {pokemonDetails.hp}</span>
        </div>
      </div>
      <div className="viewDetails-btn">
        <Link to={`/pokemon/${name}`}><button>View Details</button></Link>
      </div>
    </div>
  );
}

export default PokemonCard;