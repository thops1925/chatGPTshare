import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

type Prompt = {
	userId?: string;
	prompt?: string;
	tag?: string;
};

export const POST = async (request: Request) => {
	const data: Prompt = await request.json();
	const { userId, prompt, tag } = data;

	try {
		await connectToDB();
		const newPrompt = new Prompt({ creator: userId, prompt, tag });

		await newPrompt.save();
		return NextResponse.json(JSON.stringify(newPrompt), { status: 201 });
	} catch (error) {
		return NextResponse.json('Failed to create a new prompt', { status: 500 });
	}
};
