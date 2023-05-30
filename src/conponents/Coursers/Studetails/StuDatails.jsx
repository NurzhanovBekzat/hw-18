import React from 'react';
import { useParams } from 'react-router-dom';

export const StuDatails = () => {
	const { id } = useParams();

	return (
		<div>
			<p>Students details page</p>

			<br />
			<h1>Student Name {id}</h1>
		</div>
	);
};
