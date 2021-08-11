const initialState = {
  configuration: {},
  users: [],
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLIENT-DATA":
      const usersList = Object.values(action.payload.users).map((el) => el);
      return {
        ...state,
        configuration: action.payload.configuration,
        users: state.users.concat(usersList),
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
