'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/images/thops3.png';

type Props = {
	provider: any;
	signOut: any;
	signIn: any;
};

const DesktopNav = ({ provider, signOut, signIn }: Props) => {
	return (
		<div className='sm:flex hidden'>
			{provider?.user ? (
				<div className='flex gap-3 md:gap-5 items-center'>
					<Link href='/create-prompt' className='text-white rounded-full bg-black px-5 py-3 font-bold tracking-wide h-12'>
						Create Post
					</Link>

					<button onClick={() => signOut()} type='button' className='rounded-full font-bold tracking-wide border border-black  px-5 py-3 h-12'>
						Sign Out
					</button>

					<Link href='/profile'>
						<Image
							src={provider?.user?.image}
							alt='logo'
							className='rounded-full blur-0 object-fit h-12 w-12 border border-black'
							width={100}
							height={100}
						/>
					</Link>
				</div>
			) : (
				<>
					<button
						type='button'
						key={provider?.user.name}
						onClick={() => signIn(provider?.user?.id)}
						className='text-white rounded-full bg-black px-5 py-3 font-bold tracking-wide h-12'>
						Sign In
					</button>
				</>
			)}
		</div>
	);
};

export default DesktopNav;
