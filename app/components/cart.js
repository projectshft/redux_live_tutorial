import { useCart } from '../contexts/CartContext';

export default function Cart() {
	const { cart = [], addToCart } = useCart();
	const total = cart.reduce((acc, item) => acc + item.price, 0);
	return (
		<div>
			<h1>Cart</h1>
			<ul>
				{cart.map((item) => (
					<li onClick={() => addToCart(item)} key={item.id}>
						{item.name}
					</li>
				))}
				<p>Total: {total}</p>
			</ul>
		</div>
	);
}
