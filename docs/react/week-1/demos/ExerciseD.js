import React from "react";

import Demo from "@theme/Demo";

export function ExerciseDDemo() {
  return (
    <Demo>
      <div>
        <header>
          <h1>Welcome to the Pokedex</h1>
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
            alt="Pokedex"
            // Restrict the image size to fit better
            style={{ maxWidth: "200px" }}
          />
        </header>
      </div>
    </Demo>
  );
}
