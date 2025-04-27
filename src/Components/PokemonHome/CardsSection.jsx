import React, { useState, useEffect } from "react";
import PokemonCard from "../PokemonCard";

const CardsSection = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const handleNext = () => {
    setOffset((prev) => prev + limit);
  }

  const handlePrevious = () => {
    setOffset((prev) => Math.max(0, prev - limit))
  }

  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();
  
        setPokemons(data.results);
      } catch(err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemons();
  }, [offset]);

  if (loading) {
    return (
      <div className="loader"></div>
    )
  }
  
  return (
    <>
      <section className="PokemonSection">
        {pokemons.map((pokemon, index) => 
          <PokemonCard key={index} name={pokemon.name}/>
        )}
      </section>
      <div className="pagination">
        <button className="pagination-btn" onClick={handlePrevious} disabled={offset === 0}>Previous</button>
        <button className="pagination-btn" onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default CardsSection;