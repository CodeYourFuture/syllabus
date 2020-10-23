import React, { useState } from "react";

import Demo from "@theme/Demo";

export function ExerciseDDemo() {
  return (
    <Demo>
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </Demo>
  );
}

function CaughtPokemon(props) {
  const [caught, setCaught] = useState(0);

  function catchPokemon() {
    setCaught(caught + 1);
  }

  return (
    <p>
      Caught {caught} Pokemon on {props.date}
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </p>
  );
}
