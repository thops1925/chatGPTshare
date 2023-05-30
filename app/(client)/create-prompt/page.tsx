'use client';
import Form from '@components/Form';
import { useState } from 'react';
import router from 'next/router';
import { useSession } from 'next-auth/react';

const CreatePrompt = () => {
	// const { data: session } = useSession();

	const [submitting, setSubmitting] = useState(false);
	const [post, setPost] = useState({
		prompt: '',
		tag: '',
	});

	const createPrompt = async (e: any) => {
		e.preventDefault();
	};

	return (
		<div>
			<Form type='Create Post' post={post} setPost={setPost} submitting={submitting} handleSubmit={createPrompt} />
		</div>
	);
};

export default CreatePrompt;
