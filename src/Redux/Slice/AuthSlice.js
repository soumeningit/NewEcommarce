import { createSlice } from '@reduxjs/toolkit';

// Initial state for authentication
const initialAuthState = {
    isLoggedIn: false,
    isSignUp: false,
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        loggedIn: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        },
        signUp: (state) => {
            state.isSignUp = !state.isSignUp;
        }
    },
});

export const { loggedIn, signUp } = AuthSlice.actions;
export default AuthSlice.reducer;
