const scoreReducer = function (state = 0, action) {
  switch (action.type) {
    case "HIT":
      return state + 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

export default scoreReducer;
