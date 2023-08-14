import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {authService} from "../services/authService"



// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isFailed: false,
  isSucceded: false,
  isPending: false,
  message: "",
};

// register user thunk
const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
  try {
    const response = await authService.register(user);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//login users


const login = createAsyncThunk("auth/register", async (user, thunkAPI) => {
  try {
    const response = await authService.login(user);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});


// handle actions in your reducers:
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    reset: (state) => {
      state.isPending = false;
      state.isSucceded = false;
      state.isFailed = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isPending = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isPending = false;
        state.isSucceded = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isPending = false;
        state.isFailed = true;
        state.message = action.payload;
        state.user = null;
      })
     
      .addCase(login.pending, (state) => {
        state.isPending = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isPending = false;
        state.isSucceded = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isPending = false;
        state.isFailed = true;
        state.message = action.payload;
        state.user = null;
      })

    }
     
      
});

export const { reset } = authService.actions;
export default authSlice.reducer;