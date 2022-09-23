import React from "react";

import buttoncss from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={buttoncss.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
