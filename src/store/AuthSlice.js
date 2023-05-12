import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    errorAuth: false
}

const AuthSlice = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setErrorAuth: (state, action) => {
            state.errorAuth = action.payload;
        }
    }
})

export const {
    setUser,
    setErrorAuth,
} = AuthSlice.actions

export default AuthSlice.reducer