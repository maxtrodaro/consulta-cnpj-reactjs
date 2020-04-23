import styled from "styled-components";

export const Input = styled.input`
	width: 350px;
	height: 60px;
	color: #707070;
	border: 2px solid #e0e0e0;
	border-radius: 6px;
	padding: 0 50px;
	margin-top: 20px;
`;

export const Button = styled.button`
	height: 60px;
	background: #e0e0e0;
	border: 0;
	border-radius: 6px;
	color: #757575;
	margin-top: 20px;
	text-align: center;
	text-decoration: none;
	line-height: 60px;
	font-weight: 600;
	width: 350px;
	&:hover {
		background: #3a0d51;
		background: -webkit-linear-gradient(to right, #3a0d51, #621d3d);
		background: linear-gradient(to right, #3a0d51, #621d3d);
		color: #fff;
	}
`;

export const HomeButton = styled.button`
	height: 60px;
	background: #f57c00;
	border: 0;
	border-radius: 0 0 6px 6px;
	color: #ffffff;
	font-weight: 700;
	text-align: center;
	text-decoration: none;
	line-height: 60px;
	width: 100%;
	margin: 0;
`;

export const RegisterButton = styled.button`
	height: 60px;
	background: #f57c00;
	border: 0;
	border-radius: 6px;
	color: #f5f5f5;
	text-align: center;
	text-decoration: none;
	line-height: 60px;
	font-weight: 600;
	width: 200px;
	&:not(:last-child) {
		margin-right: 20px;
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
	color: #333333;
	border: 2px solid #e0e0e0;
	border-radius: 6px 0 0 6px;
	padding: 0 10px;
`;

export const ButtonSearch = styled.button`
	height: 60px;
	padding: 5px;
	border-radius: 0 6px 6px 0;
	border: 2px solid #f57c00;
	background: #f57c00;
	margin-top: 0;
`;
