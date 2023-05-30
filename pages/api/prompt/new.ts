import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';
import { NextApiRequest } from 'next';

export default async function (req: NextApiRequest) {
	const body = await req.body;
	console.log(body);
	try {
		await connectToDB();
		const newPrompt = new Prompt({ creator: body.userId, prompt: body.prompt, tag: body.tag });
		await newPrompt.save();
		return new Response(JSON.stringify(newPrompt), { status: 201 });
	} catch (error) {
		console.log(error);
	}
}
