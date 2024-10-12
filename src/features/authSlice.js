import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("user"),
  email: JSON.parse(localStorage.getItem("user"))?.email || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email } = action.payload;
      state.email = email;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify({ email }));
    },

    logout: (state) => {
      const { email } = state;
      if (email) {
        localStorage.removeItem("user");
      }
      state.email = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

