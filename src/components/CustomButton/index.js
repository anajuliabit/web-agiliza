import React from "react";
import "./styles.css";

export const CustomButton = ({ children, color = "green", ...rest }) => {
  return (
    <button className={`custom-button ${color}`} {...rest}>
      {children}
    </button>
  );
};
