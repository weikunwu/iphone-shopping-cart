import {createStore, combineReducers } from 'redux';
import reducer from "./reducer";

const rootReducer = combineReducers({
    cartReducer: reducer
  });

const store = createStore(rootReducer);

export default store;