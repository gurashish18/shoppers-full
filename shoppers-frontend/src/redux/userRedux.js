import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state)=> {
            state.isFetching = true;
        },
        loginSuccess: (state,action)=>{
            state.currentUser = action.payload;
            state.isFetching = false;
        },
        loginFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
        registerStart: (state)=>{
            state.isFetching = false;
        },
        registerSuccess: (state)=>{
            state.isFetching = false;
        },
        registerFailure: (state) => {
            state.error = true;
            state.isFetching = false;
        },
        logout: (state) => {
            state.currentUser = null;
        }
    },
});

export const { loginStart, loginFailure, loginSuccess, registerStart, registerSuccess, registerFailure, logout } = userSlice.actions;
export default userSlice.reducer;
