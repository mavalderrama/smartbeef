import auth_reducer from "./auth_reducer";
import drawer_reducer from "./drawer_reducer";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth_reducer: auth_reducer,
  drawer_reducer: drawer_reducer,
  form: formReducer
});
