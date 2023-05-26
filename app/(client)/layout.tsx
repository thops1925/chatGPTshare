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
				<main className={`${inter} antialiased`}>{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
