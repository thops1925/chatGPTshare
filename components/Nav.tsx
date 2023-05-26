'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/images/thops3.png';
import DesktopNav from './DesktopNav';

const Nav = () => {
	return (
		<nav className='flex justify-between items-center mb-16 pt-3 '>
			<Link href='/' className='flex justify-center items-center'>
				<Image src={logo} alt='logo' className='object-contain h-14 w-24 lg:h-20 lg:w-24 blur-0' />
				{/* <p className='font-satoshi font-semibold text-lg text-black tracking-wide max-sm:hidden blur-4'> Pro</p> */}
			</Link>
			<DesktopNav />
		</nav>
	);
};

export default Nav;
