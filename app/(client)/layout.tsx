import Nav from '@components/Nav';
import { Provider } from '@components/Provider';
import '@styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Share',
	description: 'Share AI Search',
};

const RootLayout = ({ children }: any) => {
	return (
		<html lang='eng'>
			<body className='max-w-7xl mx-auto bg-gray-200	'>
				<Provider>
					<Nav />
					<main className={`${inter} antialiased`}>{children}</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
