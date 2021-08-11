import { combineReducers } from "redux";
import loginReducer from "./reducer";
const reducers = combineReducers({
  login: loginReducer,
});

export default reducers;
