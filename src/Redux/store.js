import { applyMiddleware, createStore } from "redux";
import reducer from "./Reducers";
import promise from "redux-promise-middleware";

const middleware = applyMiddleware(promise);
export default createStore(reducer, middleware);
