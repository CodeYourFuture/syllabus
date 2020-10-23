import React, { useState } from "react";

import Demo from "@theme/Demo";

export function ExerciseFDemo() {
  return (
    <Demo>
      <PokemonCity />
    </Demo>
  );
}

function PokemonCity() {
  const [city, setCity] = useState("");

  function updateCity(event) {
    console.log(event.target.value);
    setCity(event.target.value);
  }

  return (
    <div>
      <input type="text" value={city} onChange={updateCity} />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}
