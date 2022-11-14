import { configureStore } from "@reduxjs/toolkit";

import ListSlice from "./slices/ListSlice.js";

const store = configureStore({
  reducer: {
    list: ListSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
