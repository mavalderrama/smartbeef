import auth_reducer from "./auth_reducer";
import signup_reducer from "./signup_reducer";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth_reducer: auth_reducer,
  signup_reducer: signup_reducer,
  form: formReducer
});
