import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';
import User from '@models/user';
import type { Adapter } from 'next-auth/adapters';

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],

	// callbacks: {
	// 	async session({ session }: { session: any }) {
	// 		const sessionUser = await User.findOne({
	// 			email: session.user.email,
	// 		});
	// 		session.user.id = sessionUser._id.toString();
	// 	},

	// 	async signIn({ profile }: { profile: any }) {
	// 		try {
	// 			await connectToDB();
	// 			const userExist = await User.findOne({
	// 				email: profile.email,
	// 			});
	// 			if (!userExist) {
	// 				await User.create({
	// 					email: profile.name,
	// 					username: profile.name.replace(' ', '').toLowerCase(),
	// 					image: profile.picture,
	// 				});
	// 			}
	// 			return true;
	// 		} catch (error) {
	// 			console.log(error);
	// 			return false;
	// 		}
	// 	},
	// },
};

export default NextAuth(authOptions);
