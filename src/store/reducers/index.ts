import { combineReducers } from "redux";

import modalReducer from "./modalReducer";
import { userApi } from "./userReducer";

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
