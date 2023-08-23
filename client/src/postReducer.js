
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export const FETCH_ALL = createAsyncThunk("FETCH_ALL", async () => {
  const data = await axios.get("http://localhost:5000/posts");
  return data.json();
});


const postSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(FETCH_ALL.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(FETCH_ALL.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(FETCH_ALL.rejected, (state, action) => {
      console.log("Error:", action.payload);
      state.isError = true;
    });
  },
});



export default postSlice.reducer;
