import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers/index";
import { userApi } from "./reducers/userReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type AppDispatch = typeof store.dispatch;

export default store;
