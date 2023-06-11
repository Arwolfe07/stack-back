import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionReducer from "./question";
import userReducer from "./allUser";

export default combineReducers({ authReducer, currentUserReducer, questionReducer, userReducer });