import { combineReducers } from "redux";

import scoreReducer from "./score.js";
import usernameReducer from "./username.js";

export default combineReducers({ scoreReducer, usernameReducer });
