import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
    selectedBlog: '',
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    selectedBlog: (state, action) => {
      state.selectedImage = action.payload;
    }
  }
})

export const { login, logout, selectedBlog} = appSlice.actions;
export const selectUser = state => state.app.user;
export const selectSelectedBlog = state => state.app.selectedBlog;
export default appSlice.reducer;