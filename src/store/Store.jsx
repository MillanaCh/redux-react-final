import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../components/ReduxSlice";

const store = configureStore({
  reducer: userSlice.reducer,
});
export default store;
