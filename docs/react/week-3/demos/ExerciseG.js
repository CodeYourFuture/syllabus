import React, { useState } from "react";

import Demo from "@theme/Demo";

export function ExerciseGDemo() {
  return (
    <Demo>
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </Demo>
  );
}

function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function catchPokemon() {
    if (pokemonNameInput === "") {
      return;
    }

    setCaught(caught.concat(pokemonNameInput));
    setPokemonNameInput("");
  }

  function handleInputChange(event) {
    console.log(event.target.value);
    setPokemonNameInput(event.target.value);
  }

  return (
    <p>
      Caught {caught.length} Pokemon on {props.date}
      <ul>
        {caught.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </p>
  );
}

function getRandomPokemon() {
  const pokemon = ["Ditto", "Eevee", "Pikachu", "Butterfree", "Spearow"];
  return pokemon[Math.floor(Math.random() * pokemon.length)];
}
