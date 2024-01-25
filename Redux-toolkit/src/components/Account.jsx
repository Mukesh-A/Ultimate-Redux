import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../slices/accountSlice";

const Account = () => {
  const [value, setValue] = useState(0);

  const amount = useSelector((state) => state.account.amount);

  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>Account</h4>
        <h3>Amount:$ {amount}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By value
        </button>
      </div>
    </div>
  );
};

export default Account;
