import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "../slices/bonusSlice";

const Bonus = () => {
  // const amount = useSelector((state) => state.account.amount);
  const bonus = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();
  // const [bonus, setBonus] = useState({ points: 0 });

  // const increment = () => {
  //   setBonus({ points: bonus.points + 1 });
  // };
  return (
    <div>
      <h4>Bonus</h4>
      <h3>Bonus:$ {bonus}</h3>
      <button onClick={() => dispatch(increment())}>Increment +</button>
    </div>
  );
};

export default Bonus;
