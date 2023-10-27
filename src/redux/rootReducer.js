import { combineReducers } from "redux";
import imagesReducer from "./ducks/image";

const rootReducer = combineReducers({
  image: imagesReducer,
});

export { rootReducer };
