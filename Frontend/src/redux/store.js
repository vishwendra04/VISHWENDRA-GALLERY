// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./reducers/gallerySlice";

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});

export default store;
