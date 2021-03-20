import React, { useState } from "react";

import "./ExerciseSolution.css";

export default function ExerciseSolutions({ password, children }) {
  const [shown, setShown] = useState(false);

  return (
    <div className="exercise-solutions">
      {!shown ? (
        <Password
          password={password}
          onCorrectPassword={() => setShown(true)}
        />
      ) : (
        children
      )}
    </div>
  );
}

function Password({ password, onCorrectPassword }) {
  function handleSubmit(e) {
    e.preventDefault();

    const { solutionPassword } = e.target.elements;
    if (solutionPassword.value === password) {
      onCorrectPassword();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="exercise-solutions__password">
      <div>
        <label htmlFor="solutionPassword">
          Enter the password to reveal the answers:
        </label>
        <input
          type="password"
          name="solutionPassword"
          id="solutionPassword"
          className="exercise-solutions__input"
          placeholder="Password"
        />
      </div>
      <button className="button button--outline button--info exercise-solutions__submit">
        Submit
      </button>
    </form>
  );
}
