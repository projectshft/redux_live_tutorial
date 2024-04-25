import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	shoppingCart: [],
	total: 100,
	status: 'idle',
};

export const fetchItems = createAsyncThunk('shopping/fetchItems', async () => {
	//fake store api call
	const response = await fetch('https://fakestoreapi.com/products');
	const data = await response.json();
	return data;
});

export const shoppingSlice = createSlice({
	name: 'shopping',
	initialState,
	// TODO: add extra reducers to handle the fetchItems action
	reducers: {
		addItem: (state, action) => {
			// action.payload is the product object
			state.shoppingCart.push(action.payload);
		},
		removeItem: (state, action) => {
			state.shoppingCart = state.shoppingCart.filter(
				(item) => item.id !== action.payload.id
			);
		},
	},
});

// Action creators are generated for each case reducer function
export const { addItem } = shoppingSlice.actions;

export default shoppingSlice.reducer;
