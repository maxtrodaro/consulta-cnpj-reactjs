import styled from "styled-components";
import variables from "./variables";

export const Input = styled.input`
	width: 350px;
	height: 60px;
	color: ${variables.colors.gray};
	border: 2px solid ${variables.colors.borderGray};
	border-radius: 6px;
	padding: 0 50px;
	margin-top: 20px;
`;

export const Button = styled.button`
	height: 60px;
	border: 0;
	border-radius: 6px;
	margin-top: 20px;
	text-align: center;
	text-decoration: none;
	line-height: 60px;
	font-weight: 600;
	width: 350px;
	background: ${variables.colors.primaryColor};
	background: -webkit-linear-gradient(
		to right,
		${variables.colors.primaryColor},
		${variables.colors.linearColor}
	);
	background: linear-gradient(
		to right,
		${variables.colors.primaryColor},
		${variables.colors.linearColor}
	);
	color: ${variables.colors.white};
	&:disabled {
		background: ${variables.colors.borderGray};
		color: ${variables.colors.darkGray};
	}
`;

export const HomeButton = styled.button`
	height: 60px;
	background: ${variables.colors.secundaryColor};
	border: 0;
	border-radius: 0 0 6px 6px;
	color: ${variables.colors.white};
	font-weight: 700;
	text-align: center;
	text-decoration: none;
	line-height: 60px;
	width: 100%;
	margin: 0;
`;

export const RegisterButton = styled.button`
	height: 60px;
	background: ${variables.colors.secundaryColor};
	border: 0;
	border-radius: 6px;
	color: ${variables.colors.lightGray};
	text-align: center;
	text-decoration: none;
	line-height: 60px;
	font-weight: 600;
	width: 200px;
	&:not(:first-child) {
		margin-right: 20px;
	}
	&:disabled {
		background: ${variables.colors.borderGray};
		color: ${variables.colors.darkGray};
	}
`;

export const RegisterLink = styled.a`
	display: flex;
	align-items: center;
	margin-top: 20px;
`;

export const InputSearch = styled.input`
	width: 180px;
	height: 60px;
	color: ${variables.colors.lightBlack};
	border: 2px solid ${variables.colors.borderGray};
	border-radius: 6px 0 0 6px;
	padding: 0 10px;
`;

export const ButtonSearch = styled.button`
	height: 60px;
	padding: 5px;
	border-radius: 0 6px 6px 0;
	border: 2px solid ${variables.colors.secundaryColor};
	background: ${variables.colors.secundaryColor};
	margin-top: 0;
`;
