'use client';
import Link from 'next/link';
import Cart from './components/cart';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
				<Cart />
				<Link href='/products'>Products Page</Link>
			</div>
		</main>
	);
}
