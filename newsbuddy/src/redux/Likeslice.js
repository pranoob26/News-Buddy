import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "Like",
  initialState: [],
  reducers: {
    addlike: (state, action) => {
      state.push(action.payload);
    },
    removelike: (state, action) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});
export const { addlike, removelike } = likeSlice.actions;
export default likeSlice.reducer;
