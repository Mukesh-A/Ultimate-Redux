import React, { useState } from "react";
import { incrementBonus } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Bonus = () => {
  const amount = useSelector((state) => state.account.amount);
  const bonus = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();
  // const [bonus, setBonus] = useState({ points: 0 });

  // const increment = () => {
  //   setBonus({ points: bonus.points + 1 });
  // };
  return (
    <div>
      <h4>Account</h4>
      <h3>Amount:$ {bonus}</h3>
      <button onClick={() =>dispatch(incrementBonus())}>
        Increment +
      </button>
    </div>
  );
};

export default Bonus;
