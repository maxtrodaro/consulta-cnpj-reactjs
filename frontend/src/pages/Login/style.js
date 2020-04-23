import styled from "styled-components";

import iconUser from "../../assets/icon-user.png";
import iconPass from "../../assets/icon-pass.png";

export const LoginPage = styled.section`
	.login-container {
		width: 100%;
		height: 100vh;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		&__form {
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			width: auto;
			margin-top: 50px;
			background: #f5f5f5;
			padding: 30px;
			border-radius: 10px;
			position: relative;
			&__group {
				position: relative;
			}
			&__error {
				position: absolute;
				width: auto;
				background: #f44336;
				color: #ffffff;
				text-align: center;
				border-radius: 6px;
				height: 24px;
				font-size: 16px;
				left: 10%;
				top: 5%;
				padding: 0 5%;
				&::after {
					background: #f44336;
					border-left: 2px solid #f44336;
					border-top: 2px solid #f44336;
					content: "";
					height: 12px;
					position: absolute;
					right: 1.5rem;
					top: 15px;
					left: 3px;
					-webkit-transform: rotate(45deg);
					-ms-transform: rotate(45deg);
					transform: rotate(45deg);
					width: 1rem;
					z-index: 0;
				}
				+ input {
					border: 2px solid #f44336;
				}
			}
			&__input {
				width: 350px;
				height: 60px;
				color: #707070;
				border: 2px solid #e0e0e0;
				border-radius: 6px;
				padding: 0 50px;
				margin-top: 20px;
				&.error {
					border: 2px solid #f44336;
					color: #f44336;
				}
			}
			&__user {
				&::before {
					content: "";
					background: url(${iconUser}) no-repeat;
					position: absolute;
					display: block;
					height: 24px;
					width: 24px;
					top: 37px;
					left: 15px;
				}
			}
			&__password {
				&::before {
					content: "";
					background: url(${iconPass}) no-repeat;
					position: absolute;
					display: block;
					height: 28px;
					width: 24px;
					top: 37px;
					left: 15px;
				}
			}
			&__link {
				display: flex;
				align-items: center;
				margin-top: 20px;
				color: #696969;
			}
		}
		&__message {
			color: #ef9a9a;
			margin-top: 20px;
			font-size: 24px;
			line-height: 28px;
			&.e-none {
				display: none;
			}
			&.e-active {
				display: block;
			}
		}
	}
`;
