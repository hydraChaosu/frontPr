import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateInterface {
  isLoggedIn: boolean;
  userId: string | null;
  userRole: number | null;
}

const initialState: initialStateInterface = {
  isLoggedIn: false,
  userId: null,
  userRole: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<initialStateInterface>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userId = action.payload.userId;
      state.userRole = action.payload.userRole;
    },
    logOut: (state, action: PayloadAction<true>) => {
      state.isLoggedIn = false;
      state.userId = null;
      state.userRole = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
