import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { testReducer } from "./reducers/testReducers";
import { authReducer } from "./reducers/authReducers";

const reducer = combineReducers({
    test: testReducer,
    auth: authReducer
});

const userInfoFromStorage = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth") || '{}')
  : null;
  
const initialState = {
    auth: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;