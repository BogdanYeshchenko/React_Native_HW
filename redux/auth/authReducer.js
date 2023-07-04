import { createSlice } from "@reduxjs/toolkit";
import { logUpThunk, logInThunk, logOutThunk } from "./authOperations";
import { showMessage } from "react-native-flash-message";

const initialState = {
  userId: null,
  login: null,
  email: null,
  photoURL: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logUpThunk.pending, (state, { payload }) => {})
      .addCase(logUpThunk.fulfilled, (state, { payload }) => {
        state.userId = payload.uid;
        state.login = payload.displayName;
        state.email = payload.email;
        state.photoURL = payload.photoURL;
        state.isAuth = true;
      })
      .addCase(logUpThunk.rejected, (state, { payload }) => {
        showMessage({
          message: "error",
          description: `${payload}`,
          type: "error",
          duration: 5000,
          backgroundColor: "red",
          color: "white",
          autoHide: true,
        });
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.userId = payload.uid;
        state.login = payload.displayName;
        state.email = payload.email;
        state.photoURL = payload.photoURL;
        state.isAuth = true;
      })
      .addCase(logInThunk.rejected, (state, { payload }) => {
        showMessage({
          message: "error",
          description: `${payload}`,
          type: "error",
          duration: 5000,
          backgroundColor: "red",
          color: "white",
          autoHide: true,
        });
      })
      .addCase(logOutThunk.fulfilled, (state, { payload }) => {
        state.userId = null;
        state.login = null;
        state.email = null;
        state.photoURL = null;
        state.isAuth = false;
      });
  },
});

export const { getCurrentUser } = authSlice.actions;

// {logOutThunk
//   uid, displayName, email, photoURL;
// }

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;
