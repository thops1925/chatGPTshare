import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';
import User from '@models/user';

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],

	callbacks: {
		async session({ session }: { session: any }) {
			// store the user id from MongoDB to session
			const sessionUser = await User.findOne({ email: session.user.email });
			session.user.id = sessionUser._id.toString();
			console.log(session);
			return session;
		},
		async signIn({ profile }: { profile: any }) {
			try {
				await connectToDB();

				// check if user already exists
				const userExists = await User.findOne({ email: profile.email });
				if (userExists) return true;

				// if not, create a new document and save user in MongoDB
				await User.create({
					email: profile.email,
					username: profile.name.replace(' ', '').toLowerCase(),
					image: profile.picture,
				});
			} catch (error: any) {
				console.log('Error checking if user exists: ', error.message);
				return false;
			}
		},
	},
});

export default handler;
