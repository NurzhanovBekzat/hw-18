import React from 'react';
import GoBackButton from './goBackBtn';
import styled from 'styled-components';

export const Announments = () => {
	return (
		<Con>
			Anounments
			<GoBackButton />
		</Con>
	);
};

const Con = styled.div`
	margin-top: -550px;
	background-color: #25259a;
	width: 1150px;
	margin-left: 350px;
	height: 500px;
	padding-top: 50px;
	font-size: 25px;
	line-height: 50px;
`;
