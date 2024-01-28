import React, { useState } from "react";
import Confetti from "react-confetti";

export default function Auguri() {
  const [coriandoliColor, setCoriandoliColor] = useState(""); 

  const onHandleColorChange = (e) => {
    setCoriandoliColor(e.target.value); 
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Choose the color"
        value={coriandoliColor}
        onChange={onHandleColorChange}
      />
      <Confetti width={1800} height={1200} colors={[coriandoliColor]} />{""}
    </div>
  );
}