import React from "react";

import Demo from "@theme/Demo";

export function ExerciseADemo() {
  function logWhenClicked() {
    console.log("Clicked!");
  }
  return (
    <Demo>
      <header>
        <h1>Welcome to the Pokedex</h1>
        <img
          onClick={logWhenClicked}
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="Pokedex"
          style={{ maxWidth: "200px" }}
        />
      </header>
    </Demo>
  );
}
