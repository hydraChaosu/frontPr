 // @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from '@redux-devtools/extension';
import authSlice from "./redux/slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    // basket,
    // userinfo
  },
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});
  // middleware: (getDefaultMiddleware) => {},

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

