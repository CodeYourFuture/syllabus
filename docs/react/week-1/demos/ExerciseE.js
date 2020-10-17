import React from "react";

import Demo from "@theme/Demo";

export function ExerciseEDemo() {
  return (
    <Demo>
      <div>
        <Logo />
        <BestPokemon />
      </div>
    </Demo>
  );
}

function Logo() {
  return (
    <header>
      <h1>Welcome to the Pokedex</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokedex"
        // Restrict the image size to fit better
        style={{ maxWidth: "200px" }}
      />
    </header>
  );
}

function BestPokemon() {
  return <p>My favourite Pokemon is Squirtle</p>;
}
