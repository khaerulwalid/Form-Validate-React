import React from "react";
import { useState } from "react";

export const Form = (props) => {
  const [focused, setFocused] = useState(false);
  const { ...input } = props;

  const handleFocused = (e) => {
    setFocused(true);
  };

  return (
    <div className="form-input">
      <label>{input.label}</label>
      <input type="text" {...input} onBlur={handleFocused} focused={focused.toString()} onFocus={() => (input.name === "confirmpassword" ? setFocused(true) : "")} />
      <span>{input.errormessage}</span>
    </div>
  );
};
