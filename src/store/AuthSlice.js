import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    errorAuth: false,
    countProduct: 0,
    cart: [],
    compressionCart: []
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
        },
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        setCompressionCart: (state, action) => {
            state.compressionCart = action.payload;
        }
    }
})

export const {
    setUser,
    setErrorAuth,
    setCountProduct,
    setCart,
    setCompressionCart
} = AuthSlice.actions

export default AuthSlice.reducer