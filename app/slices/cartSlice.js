import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	shoppingCart: [],
	total: 100,
};

export const shoppingSlice = createSlice({
	name: 'shopping',
	initialState,
	reducers: {
		addItem: (state, action) => {
			// action.payload is the product object
			state.shoppingCart.push(action.payload);
		},
		removeItem: (state, action) => {
			// TODO
		},
	},
});

// Action creators are generated for each case reducer function
export const { addItem } = shoppingSlice.actions;

export default shoppingSlice.reducer;
