'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/images/thops3.png';
import { useEffect, useState } from 'react';
import { getProviders } from 'next-auth/react';

const DesktopNav = () => {
	const login = true;
	const [provider, setProvider] = useState(null);
	console.log(provider);

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
		<div className='sm:flex hidden'>
			{login ? (
				<div className='flex gap-3 md:gap-5 items-center'>
					<Link href='/create-prompt' className='text-white rounded-full bg-black px-5 py-3 font-bold tracking-wide h-12'>
						Create Post
					</Link>
					<button type='button' className='rounded-full font-bold tracking-wide border border-black  px-5 py-3 h-12'>
						Sign In
					</button>
					<Link href='/profile'>
						<Image src={logo} alt='logo' className='rounded-full blur-0 object-fit h-12 w-12 border border-black' width={100} height={100} />
					</Link>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default DesktopNav;
