import { combineReducers } from "redux";
import postReducer from "./postReducer";
import authReducer from "./authReducer";

const reducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
});

export default reducer;
