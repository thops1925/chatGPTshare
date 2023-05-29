import Feed from '@components/Feed';
import logo from '@public/assets/images/thops3.png';
import Image from 'next/image';
const Home = () => {
	return (
		<section className='flex justify-center  items-center flex-col '>
			<div className=''>
				<Image src={logo} alt='logo' className='blur-0 object-contain' />
				<h1 className='text-7xl font-bold text-center mt-5 tracking-wider'>Promps</h1>
			</div>
			<Feed />
		</section>
	);
};
export default Home;
