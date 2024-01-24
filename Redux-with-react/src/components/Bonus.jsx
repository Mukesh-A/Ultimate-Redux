import React, { useState } from "react";

const Bonus = () => {
  const [points, setPoints] = useState({ value: 0 });

  const increment = () => {
    setPoints({ value: points.value + 1 });
  };
  return (
    <div>
      <h4>Account</h4>
      <h3>Amount:$ {points.value}</h3>
      <button onClick={increment}>Increment +</button>
    </div>
  );
};

export default Bonus;
