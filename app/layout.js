'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';

import { CartProvider } from './contexts/CartContext';
import Header from './components/header';
import UserProfile from './components/userProfile';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	const [counter, setCounter] = useState(0);
	return (
		<html lang='en'>
			<body className={inter.className}>
				<CartProvider>
					<UserProfile />
					<Header counter={counter} />
					<button onClick={() => setCounter(counter + 1)}>
						Increment
					</button>
					{children}
				</CartProvider>
			</body>
		</html>
	);
}
