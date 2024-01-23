import { createStore, applyMiddleware, combineReducers } from "redux";
import axios from "axios";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

//store
const store = createStore(
  combineReducers({
    accountReducer,
    bonusReducer,
  }),
  applyMiddleware(logger.default, thunk)
);

//reducer
function accountReducer(state = { amount: 1 }, action) {
  // //increment
  // if (action.type === "increment") {
  //   return {
  //     amount: state.amount + 1,
  //   };
  // }

  // //decrement
  // if (action.type === "decrement") {
  //   return {
  //     amount: state.amount - 1,
  //   };
  // }

  // //incrementByValue
  // if (action.type === "incrementByValue") {
  //   return {
  //     amount: state.amount + action.payload,
  //   };
  // }

  //instead of writing this much if use Switch
  switch (action.type) {
    case "init":
      return { amount: action.payload };
    case "increment":
      return { amount: state.amount + 1 };
    case "decrement":
      return { amount: state.amount - 1 };
    case "incrementByValue":
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

//bonus Reducer
function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case "init":
      return { points: state.points + 1 };

    default:
      return state;
  }
}

//global state
// console.log(store.getState());

// subscribing the store
// store.subscribe(() => {
//   console.log(store.getState());
// });

//Action creator instead of writing type in dispatch. we can create action function and play Example.

function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(initUser(data.amount));
  };
}

function initUser(value) {
  return { type: "init", payload: value };
}

function increment() {
  return { type: "increment" };
}
function decrement() {
  return { type: "decrement" };
}
function incrementByValue(value) {
  return { type: "incrementByValue", payload: value };
}

// //action for State
// store.dispatch({
//   // it directly goes to reducer
//   type: "increment",
// });

//Action creator continue... Here
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(incrementByValue(5));

setTimeout(() => {
  store.dispatch(getUser(2));
}, 2000);

//Action END
