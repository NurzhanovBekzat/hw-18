import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GoBackButton = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<div>
			<Btn onClick={goBack}>Go Back</Btn>
		</div>
	);
};

export default GoBackButton;

const Btn = styled.button`
width: 70px;
height: 40px;
background-color: red;
color: white;
border-radius:30px;


`
