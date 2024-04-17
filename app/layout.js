'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { store } from './store';
import { Provider } from 'react-redux';
import { CartProvider } from './contexts/CartContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider store={store}>
					<CartProvider>{children}</CartProvider>
				</Provider>
			</body>
		</html>
	);
}
