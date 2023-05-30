import React from 'react';
import { material } from './Materials';
import { Link, Outlet, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export const MaterialDetail = () => {
	const params = useParams();
	const materialss = material.find((el) => el.id === params.id);

	return (
		<>
			{<h1>{materialss.title}</h1>}
			<div>
				<Container>
					<LiC to='submitted'>SContainerubmitted</LiC>
					<LiC to='waiting'>Waiting</LiC>
					<LiC to='late'>Late</LiC>
				</Container>
			</div>
			<Outlet />
		</>
	);
};
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 87.4%;
	background-color: #219696;
	margin-left: 27vh;
	height: 100px;
	color: white;
	font-size: 30px;
`;

const LiC = styled(Link)`
	color: white;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;
