import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    errorAuth: false,
    countProduct: 0
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
        },
        setCountProduct: (state, action) => {
            state.countProduct = action.payload;
        }
    }
})

export const {
    setUser,
    setErrorAuth,
    setCountProduct
} = AuthSlice.actions

export default AuthSlice.reducer