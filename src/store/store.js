import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./usernameSlice";
import cartReducer from "./cartSlice";

// Create a Redux store with the specified reducers
const store = configureStore({
    reducer: {
        // Reducer for managing usernames
        usernames: usernameReducer,
        // Reducer for managing the cart
        cart: cartReducer,
    },
});

// Export the configured store to be used in the application
export default store;
