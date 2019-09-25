import { combineReducers } from "redux";

import authorReducer from "./authors";
import bookReducer from "./books";

const rootReducer = combineReducers({
  authorReducer: authorReducer,
  bookReducer: bookReducer
});

export default rootReducer;
