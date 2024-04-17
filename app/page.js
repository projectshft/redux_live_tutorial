'use client';
import Link from 'next/link';
import Cart from './components/cart';
import { useCart } from './contexts/CartContext';

const ITEMS = [
	{ id: 4, name: 'Wine', price: 100 },
	{ id: 5, name: 'Truffles', price: 200 },
	{ id: 6, name: 'Gold Bar', price: 9200 },
];

export default function Home() {
	const { addToCart } = useCart();
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100'>
			<div className='space-y-6'>
				<h1 className='text-4xl text-gray-900 font-bold'>Home Page</h1>
				<Cart />
				<ul className='grid grid-cols-1 gap-4 md:grid-cols-3'>
					{ITEMS.map((product) => (
						<li key={product.id} className='card'>
							<div className='bg-white p-4 shadow-lg rounded-lg hover:bg-gray-50'>
								<h2 className='text-xl font-semibold'>
									{product.name}
								</h2>
								<p className='text-gray-700'>
									Price: ${product.price}
								</p>
								<button
									onClick={() => addToCart(product)}
									className='mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
								>
									Add to Cart
								</button>
							</div>
						</li>
					))}
				</ul>
				<Link
					href='/products'
					className='px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400'
				>
					Products Page
				</Link>
			</div>
		</main>
	);
}
