import React from "react";

import "./Demo.css";

export default function Demo(props) {
  return (
    <div className="demo">
      <div className="demo__wrapper">{props.children}</div>
    </div>
  );
}
