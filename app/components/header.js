import React from 'react';
import { useCart } from '../contexts/CartContext';

export default function Header() {
	const { cart } = useCart();

	return (
		<header>
			<p>Items in Cart: {cart.length}</p>
		</header>
	);
}
