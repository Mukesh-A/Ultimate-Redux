import axios from "axios";

export const getAccUserPending = "account/getUser/pending";
export const getAccUserFulFilled = "account/getUser/fulfilled";
export const getAccUserRejected = "account/getUser/rejected";

export function getUser(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountUserPending());
      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(getAccountUserFulFilled(data.amount));
    } catch (error) {
      dispatch(getAccountUserRejected(error.message));
    }
  };
}

export function getAccountUserFulFilled(value) {
  return { type: getAccUserFulFilled, payload: value };
}
export function getAccountUserRejected(error) {
  return { type: getAccUserRejected, error: error };
}
export function getAccountUserPending() {
  return { type: getAccUserPending };
}

export function incrementBonus(value) {
  return { type: "init" };
}

export function increment() {
  return { type: "increment" };
}
export function decrement() {
  return { type: "decrement" };
}
export function incrementByValue(value) {
  return { type: "incrementByValue", payload: value };
}
