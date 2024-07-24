import { createReducer } from "@reduxjs/toolkit";

const initialUserState = {
  userInfo: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(initialUserState, (builder) => {
  builder
    .addCase('USER_LOGIN_REQUEST', (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase('USER_LOGIN_SUCCESS', (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    })
    .addCase('USER_LOGIN_FAIL', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('USER_LOGOUT', (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    })
    .addCase('USER_REGISTER_REQUEST', (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase('USER_REGISTER_SUCCESS', (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    })
    .addCase('USER_REGISTER_FAIL', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});
