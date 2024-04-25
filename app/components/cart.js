import { useSelector } from 'react-redux';

export default function Cart() {
	const cart = useSelector((state) => state.cart.shoppingCart);
	const total = cart.reduce((acc, item) => acc + item.price, 0);

	return (
		<div className='absolute top-0 right-0 mt-4 mr-4 bg-white border border-gray-200 shadow-lg p-4 rounded-lg w-64'>
			<h1 className='text-lg text-gray-900 font-bold border-b border-gray-200 mb-2'>
				Cart
			</h1>
			<ul>
				{cart.map((item) => (
					<li
						key={item.id}
						className='flex justify-between items-center py-1'
					>
						<span className='text-gray-900'>{item.name}</span>
						<span className='text-gray-900'>${item.price}</span>
					</li>
				))}
			</ul>
			<p className='text-right text-gray-900 font-semibold'>
				Total: ${total}
			</p>
		</div>
	);
}
