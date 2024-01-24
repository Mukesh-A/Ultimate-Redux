//bonus Reducer
export function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case "init":
      return { points: state.points + 1 };

    default:
      return state;
  }
}
