import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./usernameSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer: {
        usernames: usernameReducer,
        cart: cartReducer,
    },
});

export default store;
