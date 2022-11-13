import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "./slices/ListSlice";

const store = configureStore({
  reducer: {
    list: ListSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
