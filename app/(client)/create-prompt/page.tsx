'use client';
import Form from '@components/Form';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const CreatePrompt = () => {
	// const router = useRouter();
	const { data: session } = useSession();
	console.log(session);

	const [submitting, setSubmitting] = useState(false);
	const [post, setPost] = useState({
		prompt: '',
		tag: '',
	});
	console.log(post);
	const createPrompt = async (e: any) => {
		e.preventDefault();
		setSubmitting(true);
		try {
			const response = await fetch('/api/prompt/new', {
				method: 'Post',
				body: JSON.stringify({
					prompt: post.prompt,
					userId: session?.user,
					tag: post.tag,
				}),
			});
			// if (response.ok) return router.push('/');
		} catch (error) {
			console.log(error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div>
			<Form type='Create Post' post={post} setPost={setPost} submitting={submitting} handleSubmit={createPrompt} />
		</div>
	);
};

export default CreatePrompt;
