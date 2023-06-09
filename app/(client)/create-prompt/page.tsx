'use client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { useSession } from 'next-auth/react';

import Form from '@components/Form';

const CreatePrompt = () => {
	const { data: session } = useSession();
	const router = useRouter();
	const [submitting, setIsSubmitting] = useState(false);
	const [post, setPost] = useState({ prompt: '', tag: '' });

	const createPrompt = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch('/api/prompt/new', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userId: session?.user?.id,
					prompt: post.prompt,
					tag: post.tag,
				}),
			});

			if (response.ok) {
				router.push('/');
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return <Form type='Create' post={post} setPost={setPost} submitting={submitting} handleSubmit={createPrompt} />;
};

export default CreatePrompt;
