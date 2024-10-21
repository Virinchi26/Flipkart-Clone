import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {getProductsReducer} from "./reducers/productReducer";

const middleware = [thunk];

const reducer = combineReducers({
  getProducts: getProductsReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

