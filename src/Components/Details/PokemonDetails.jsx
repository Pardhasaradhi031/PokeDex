import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { capitalizeFirst } from "../../util/TypeImage";
import PokemonStatsCard from "./PokemonStatsCard";

const PokemonDetails = () => {
  const { id } = useParams();

  const [pokemonData, setPokemonData] = useState({
    name: "",
    image: null,
    type: [],
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
    },
  });

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();

      console.log(data);

      setPokemonData({
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        type: data.types.map(type => type.type.name),
        stats: {
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
        },
      });
    };
    fetchPokemonDetails();
  }, []);
  return (
    <div className="DetailsWrapper">
      <h1>{capitalizeFirst(pokemonData.name)}</h1>
      <div className="imageContainer">
        <img
          src={pokemonData.image}
          alt={`${pokemonData.name} Image`}
          height={400}
          width={400}
        />
      </div>
      <PokemonStatsCard data={pokemonData.stats} type={pokemonData.type} />
    </div>
  );
};

export default PokemonDetails;
