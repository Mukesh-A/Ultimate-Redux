import React, { useState } from "react";

const Account = () => {
  const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  const increment = () => {
    setAccount({ amount: account.amount + 1 });
  };
  const decrement = () => {
    setAccount({ amount: account.amount - 1 });
  };
  const incrementByAmount = (value) => {
    setAccount({ amount: account.amount + +value });
  };

  return (
    <div className="card">
      <div className="container">
        <h4>Account</h4>
        <h3>Amount:$ {account.amount}</h3>
        <button onClick={increment}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => incrementByAmount(value)}>
          Increment By value
        </button>
      </div>
    </div>
  );
};

export default Account;
