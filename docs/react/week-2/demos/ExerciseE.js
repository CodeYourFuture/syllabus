import React, { useState } from "react";

import Demo from "@theme/Demo";

export function ExerciseEDemo() {
  return (
    <Demo>
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </Demo>
  );
}

function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    setCaught(caught.concat(getRandomPokemon()));
  }

  return (
    <p>
      Caught {caught.length} Pokemon on {props.date}
      <ul>
        {caught.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </p>
  );
}

function getRandomPokemon() {
  const pokemon = ["Ditto", "Eevee", "Pikachu", "Butterfree", "Spearow"];
  return pokemon[Math.floor(Math.random() * pokemon.length)];
}
