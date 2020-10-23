import React from "react";

import Demo from "@theme/Demo";

export function ExerciseGDemo() {
  return (
    <Demo>
      <div>
        <Logo />
        <BestPokemon />
        <CaughtPokemon />
      </div>
    </Demo>
  );
}

function Logo() {
  const appName = "CYF's Pokedex";

  return (
    <header>
      <h1>Welcome to {appName}</h1>
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
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
    </div>
  );
}

function CaughtPokemon() {
  const date = new Date().toLocaleDateString();

  return <p>Caught 0 Pokemon on {date}</p>;
}
