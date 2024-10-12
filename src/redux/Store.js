import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice"; // Import your reducers
import authReducer from "./authReducer";

const store = configureStore({
  reducer: {
    theme: themeReducer, // Add your reducers here
    auth: authReducer, // Add your reducers here
  },
});

export default store;
