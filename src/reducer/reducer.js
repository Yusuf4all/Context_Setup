export const initialState = {
  counter: 0,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_CALCULATE_RESULT":
      return { ...state, counter: action.payload };

    default:
      return state;
  }
};
