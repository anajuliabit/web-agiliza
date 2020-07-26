import React from "react";
import "./styles.css";

export const CustomButton = ({ children, ...rest }) => {
  return (
    <button className="custom-button" {...rest}>
      {children}
    </button>
  );
};
