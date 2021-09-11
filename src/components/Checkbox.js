import React from "react";

export const Checkbox = ({ className, text, ...rest }) => {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
};
