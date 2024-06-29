// reducers/gallerySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  images: [],
  categories: [],
};

export const getAllImages = createAsyncThunk(
  "images/fetchAllImages",
  async () => {
    const res = await axios.get("https://vishwendra-gallery.onrender.com/api/v1/get/images");
    return res.data;
  }
);

export const getAllCategories = createAsyncThunk(
  "images/fetchAllCategories",
  async () => {
    const res = await axios.get("https://vishwendra-gallery.onrender.com/api/v1/get/categories");
    return res.data;
  }
);

export const postNewCategory = createAsyncThunk(
  "images/postNewCategory",
  async (payload) => {
    const res = await axios.post(
      "https://vishwendra-gallery.onrender.com/api/v1/add/category",
      payload
    );
    return res.data;
  }
);

export const postNewImage = createAsyncThunk(
  "images/postNewImage",
  async (payload) => {
    const res = await axios.post(
      "https://vishwendra-gallery.onrender.com/api/v1/upload/image",
      payload
    );
    return res.data;
  }
);

export const getSingleImage = createAsyncThunk(
  "images/getSingleImage",
  async (payload) => {
    const res = await axios.get(
      `https://vishwendra-gallery.onrender.com/api/v1/get/singleimage?category=${payload}`
    );
    return res.data;
  }
);

const gallerySlice = createSlice({
  name: "galleryslice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllImages.fulfilled, (state, action) => {
        state.images = action.payload;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getSingleImage.fulfilled, (state, action) => {
        state.images = action.payload;
      });
  },
});

export default gallerySlice.reducer;
