import Image from 'next/image';
import logo from '@public/assets/images/thops3.png';
import { useState } from 'react';
import Link from 'next/link';

type Props = {
	provider: null;
	signIn: any;
};
const MobileViewNav = ({ provider, signIn }: Props) => {
	const login = true;
	const [dropDown, setDropDown] = useState(false);
	console.log(dropDown);
	return (
		<div className='sm:hidden flex relative'>
			{login ? (
				<div className='flex'>
					<Image
						src={logo}
						alt='logo'
						className='rounded-full blur-0 object-contain h-12 w-12 border border-black'
						width={100}
						height={100}
						onClick={() => setDropDown((prev) => !prev)}
					/>
					{dropDown && (
						<div className='absolute right-0 top-full mt-3 w-full p-5 rounded-lg min-w-[210px] flex flex-col gap-2  justify-end items-end border border-black border-opacity-20 '>
							<Link href='/profile' onClick={() => setDropDown(false)} className='capitalize font-bold tracking-wide  h-12'>
								my profile
							</Link>
							<Link href='/create-prompt' className=' capitalize font-bold tracking-wide h-12' onClick={() => setDropDown(false)}>
								create post
							</Link>
						</div>
					)}
				</div>
			) : (
				<>
					{provider &&
						Object.values(provider).map((provider: any) => (
							<button
								type='button'
								key={provider.name}
								onClick={() => signIn(provider.id)}
								className='text-white rounded-full bg-black px-5 py-3 font-bold tracking-wide h-12'>
								Sign In
							</button>
						))}
				</>
			)}
		</div>
	);
};

export default MobileViewNav;
