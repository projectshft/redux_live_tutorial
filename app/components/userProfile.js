'use client';
import { useState } from 'react';

export default function UserProfile() {
	const [name, setName] = useState('John Doe');
	return (
		<>
			<div>User Profile</div>
			<div>Name: {name}</div>
			<button onClick={() => setName('Jane Doe')}>Change Name</button>
		</>
	);
}
