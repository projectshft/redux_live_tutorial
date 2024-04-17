import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([
		{ id: 1, name: 'Product 1', price: 100 },
		{ id: 2, name: 'Product 2', price: 200 },
		{ id: 3, name: 'Product 3', price: 300 },
		{ id: 4, name: 'Product 4', price: 400 },
	]);
	const addToCart = (product) => setCart([...cart, product]);

	return (
		<CartContext.Provider value={{ cart, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};
