const usernameReducer = function (state = "", action) {
  switch (action.type) {
    case "UPDATE":
      return action.username;
    default:
      return state;
  }
};

export default usernameReducer;
