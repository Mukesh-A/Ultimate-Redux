import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByValue } from "../actions";
const Account = () => {
  const [value, setValue] = useState(0);

  const amount = useSelector((state) => state.account.amount);
  // const bonus = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();
  // const increment = () => {
  //   setAccount({ amount: account.amount + 1 });
  // };
  // const decrement = () => {
  //   setAccount({ amount: account.amount - 1 });
  // };
  // const incrementByAmount = (value) => {
  //   setAccount({ amount: account.amount + +value });
  // };

  return (
    <div className="card">
      <div className="container">
        <h4>Account</h4>
        <h3>Amount:$ {amount}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)} />
        <button onClick={() => dispatch(incrementByValue(value))}>
          Increment By value
        </button>
      </div>
    </div>
  );
};

export default Account;
