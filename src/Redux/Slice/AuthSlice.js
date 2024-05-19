import { createSlice, configureStore } from '@reduxjs/toolkit';

// Initial state for authentication
const initialAuthState = {
    isLoggedIn: false,
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        loggedIn: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        }
    },
});

export const { loggedIn } = AuthSlice.actions;
export default AuthSlice.reducer;
