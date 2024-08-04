import { createSlice } from "@reduxjs/toolkit";

const initialUsernameState = {
    list: [],
};

const usernameSlice = createSlice({
    name: "usernames",
    initialState: initialUsernameState,
    reducers: {
        addUserName: (state, action) => {
            const { userFirstname, userSurname } = action.payload;
            state.list.push({
                id: Date.now(),
                username: `${userFirstname} ${userSurname}`,
            });
        },
    },
});

export const { addUserName } = usernameSlice.actions;

export const selectLatestUsername = (state) =>
    state.usernames.list.length > 0
        ? state.usernames.list[state.usernames.list.length - 1].username
        : null;

export default usernameSlice.reducer;
