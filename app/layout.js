'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';

import { CartProvider } from './contexts/CartContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<CartProvider>{children}</CartProvider>
			</body>
		</html>
	);
}
