'use client';

import { useCart } from '../contexts/CartContext';

export default function ProductPage(props) {
	const { addToCart, cart = [] } = useCart();

	return (
		<div>
			<h1>Products</h1>
			<ul>
				{cart.map((product) => (
					<div onClick={() => addToCart(product)}>
						<li key={product.id}>{product.name}</li>
					</div>
				))}
			</ul>
		</div>
	);
}
