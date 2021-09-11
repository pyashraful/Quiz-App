import React from "react";

export const Checkbox = ({ text, ...rest }) => {
  return (
    <label>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
};
