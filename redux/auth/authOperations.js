import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { showMessage } from "react-native-flash-message";

export const logUpThunk = createAsyncThunk(
  "auth/logUpThunk",
  async (body, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, body.email, body.password);

      await updateProfile(auth.currentUser, {
        displayName: body.login,
        photoURL: `dsdcsddc`,
      });

      const { uid, displayName, email, photoURL } = auth.currentUser;

      console.log("currentUser", uid, displayName, email, photoURL);

      return { uid, displayName, email, photoURL };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  "auth/logInThunk",
  async (body, thunkAPI) => {
    try {
      console.log(body);
      const response = await signInWithEmailAndPassword(
        auth,
        body.email,
        body.password
      );
      console.log(222222);

      const { uid, displayName, email, photoURL } = response.user;

      console.log(333333);

      return { uid, displayName, email, photoURL };
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logOutThunk",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
