import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const addToCart = (product) => setCart([...cart, product]);
	// define stuff like methods or values you want any component to have access to
	return (
		<CartContext.Provider value={{ cart, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};
