import '@styles/globals.css';

export const metadata = {
	title: 'Share',
	description: 'Share AI Search',
};

const RootLayout = ({ children }: any) => {
	return (
		<html lang='eng'>
			<body className='max-w-7xl mx-auto'>
				<main className='app'>{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
