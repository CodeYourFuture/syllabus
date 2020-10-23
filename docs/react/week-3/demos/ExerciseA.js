import React, { useState, useEffect } from "react";

import Demo from "@theme/Demo";

export function ExerciseADemo() {
  return (
    <Demo>
      <PokemonMoves />
    </Demo>
  );
}

function PokemonMoves() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemonData(data);
      });
  }, []);

  if (pokemonData) {
    return (
      <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {/* Restrict the data to only 5 items to make it fit better */}
          {pokemonData.moves.slice(0, 5).map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
