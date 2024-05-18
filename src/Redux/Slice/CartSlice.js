import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const initialState = [];

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },

    }
})

export const { addProduct, removeProduct } = CartSlice.actions;
export default CartSlice.reducer;