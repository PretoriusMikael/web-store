import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for usernames
const initialUsernameState = {
    list: [], // Array to hold usernames
};

// Create a slice of the Redux store for managing usernames
const usernameSlice = createSlice({
    name: "usernames", // Name of the slice
    initialState: initialUsernameState, // Initial state for this slice
    reducers: {
        // Reducer to add a new username to the list
        addUserName: (state, action) => {
            const { userFirstname, userSurname } = action.payload;
            state.list.push({
                id: Date.now(), // Unique ID for each username (timestamp)
                username: `${userFirstname} ${userSurname}`, // Concatenate first name and surname to create the username
            });
        },
    },
});

// Export the action creator for adding a username
export const { addUserName } = usernameSlice.actions;

// Selector to get the latest username from the state
export const selectLatestUsername = (state) =>
    state.usernames.list.length > 0
        ? state.usernames.list[state.usernames.list.length - 1].username // Get the username of the last item in the list
        : null; // Return null if there are no usernames in the list

// Export the reducer to be used in the store
export default usernameSlice.reducer;
