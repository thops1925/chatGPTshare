'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/images/thops3.png';
import DesktopNav from './DesktopNav';
import MobileViewNav from './MobileViewNav';

import { useEffect, useState } from 'react';
import { getProviders, signIn } from 'next-auth/react';

const Nav = () => {
	const [provider, setProvider] = useState(null);

	useEffect(() => {
		const setProviders = async () => {
			const response: any = await getProviders();
			setProvider(response);
		};

		return () => {
			setProviders();
		};
	}, []);

	return (
		<nav className='flex justify-between items-center mb-16 pt-3 '>
			<Link href='/' className='flex justify-center items-center'>
				<Image src={logo} alt='logo' className='object-contain h-14 w-24 lg:h-20 lg:w-24 blur-0' />
			</Link>
			<DesktopNav provider={provider} signIn={signIn} />
			<MobileViewNav provider={provider} signIn={signIn} />
		</nav>
	);
};

export default Nav;
