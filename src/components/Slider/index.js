import React, { useState } from "react";
import "./styles.css";

export const Slider = () => {
  const [ranger, setRanger] = useState(10000);

  return (
    <input
      type="range"
      id="campo"
      className="range"
      min={500}
      max={35000}
      value={ranger}
      step={50}
      onChange={(e) => setRanger(e.target.value)}
    />
  );
};
