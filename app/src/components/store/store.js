import { combineReducers, createStore } from "redux";
import loginReducer from "./loginReducer";
import dataReducer from "./dataReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    loginReducer,
    dataReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
