'use client';

import Link from 'next/link';
import Cart from '../components/cart';
import { addItem, fetchItems } from '../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const ITEMS = [
	{ id: 1, title: 'Beer', price: 100 },
	{ id: 2, title: 'Waffles', price: 200 },
	{ id: 3, title: 'Tin Foil', price: 100 },
	{ id: 9, title: 'Cookies', price: 100 },
	{ id: 10, title: 'Butter', price: 200 },
	{ id: 11, title: 'Secret to Life', price: 9200 },
];

export default function ProductPage() {
	const dispatch = useDispatch();
	const { items, status } = useSelector((state) => state.cart) || {};
	// useEffect(() => {
	// 	dispatch(fetchItems());
	// }, [dispatch]);

	// if (status === 'loading') {
	// 	return (
	// 		<main className='flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100'>
	// 			<h1 className='text-4xl text-gray-900 font-bold'>Loading...</h1>
	// 		</main>
	// 	);
	// }

	// if (status === 'failed') {
	// 	return (
	// 		<main className='flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100'>
	// 			<h1 className='text-4xl text-gray-900 font-bold'>
	// 				Failed to load products
	// 			</h1>
	// 		</main>
	// 	);
	// }

	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100'>
			<div className='space-y-6'>
				<h1 className='text-4xl text-gray-900 font-bold'>
					Product Page
				</h1>
				<Cart />
				<ul className='grid grid-cols-1 gap-4 md:grid-cols-3'>
					{ITEMS.map((product) => (
						<li key={product.id} className='card'>
							<div className='bg-white p-4 shadow-lg rounded-lg hover:bg-gray-50'>
								<h2 className='text-xl text-gray-900 font-semibold'>
									{product.title}
								</h2>
								<p className='text-gray-700'>
									Price: ${product.price}
								</p>
								<button
									onClick={() => dispatch(addItem(product))}
									className='mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
								>
									Add to Cart
								</button>
							</div>
						</li>
					))}
				</ul>
				<Link
					href='/'
					className='px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400'
				>
					Back to Home
				</Link>
			</div>
		</main>
	);
}
