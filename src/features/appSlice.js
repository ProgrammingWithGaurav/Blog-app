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
    selectBlog: (state, action) => {
      state.selectedBlog = action.payload;
    }
  }
})

export const { login, logout, selectBlog} = appSlice.actions;
export const selectUser = state => state.app.user;
export const selectSelectedBlog = state => state.app.selectedBlog;
export default appSlice.reducer;