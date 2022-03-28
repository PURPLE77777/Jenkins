import { combineReducers, createStore } from "redux";
import loginReducer from "./loginReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    loginReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
