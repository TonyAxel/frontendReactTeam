import {combineReducers, configureStore} from "@reduxjs/toolkit";
import AuthReducer from './AuthSlice'

export const RootReducers = combineReducers({
    authReducer: AuthReducer
});

export const store = configureStore({
        reducer: RootReducers
    }
)

