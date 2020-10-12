import React from "react";

import "./Feedback.css";

export default function Feedback(props) {
  const encodedModule = props.module.replace(" ", "+");
  const encodedWeek = props.week.replace(" ", "+");
  const url = `https://docs.google.com/forms/d/e/1FAIpQLScq8Zgr0pz7aMDj0D768eCpW798XgtDsKfpA6BquqK5Hdtj4A/viewform?embedded=true&entry.1672476057=${encodedModule}&entry.74981796=${encodedWeek}`;
  const editUrl =
    "https://docs.google.com/forms/d/1F2mB10japkHAPb3H-9Q4YrYH0i61GoMG1tk-P4ZT808/edit";

  return (
    <div className="feedback">
      <div className="feedback__wrapper">
        <iframe
          src={url}
          width="640"
          height="640"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
        <center>
          <p>
            Not loading? Form can be found{" "}
            <a target="_blank" href={url}>
              here
            </a>
            . Click{" "}
            <a target="_blank" href={editUrl}>
              here
            </a>{" "}
            to get edit access.
          </p>
        </center>
      </div>
    </div>
  );
}
