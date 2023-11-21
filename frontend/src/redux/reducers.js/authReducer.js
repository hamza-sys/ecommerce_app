import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../actions/authAction";

const authReducer = createSlice({
    name: 'user',
    initialState: {
        token: localStorage.getItem('token'),
        loading: false,
        error: null
    },
    reducers: {
        login: (state, action) => {
            state.token = localStorage.getItem('token')
        },
        logout: (state, action) => {
            state.token = localStorage.getItem('token')
        },
        emptyError: (state, action) => {
            state.error = null
        }
    },
    extraReducers: {
        [auth.pending]: (state, action) => {
            state.loading = true
        },
        [auth.fulfilled]: (state, action) => {
            localStorage.setItem('token', action.payload.token)
            state.token = action.payload.token
            state.loading = false
        },
        // [auth.rejected]: (state, action) => {
        //     state.error = action.payload.message
        //     state.loading = false
        // }
    }
})

export const {login, logout, emptyError} = authReducer.actions

export default authReducer.reducer