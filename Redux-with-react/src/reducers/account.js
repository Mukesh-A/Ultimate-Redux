import {
  getAccUserPending,
  getAccUserFulFilled,
  getAccUserRejected,
  getUser,
  getAccountUserFulFilled,
  getAccountUserRejected,
  getAccountUserPending,
  increment,
  decrement,
  incrementByValue,
} from "../actions";
//reducer
export function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    // will get all the state
    case getAccUserFulFilled:
      return { amount: action.payload };
    case getAccUserRejected:
      return { ...state, error: action.error };
    case getAccUserPending:
      return { ...state, pending: true };

    // case "init":
    //   return { amount: action.payload };
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
