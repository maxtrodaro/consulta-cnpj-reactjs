import styled from "styled-components";

import variables from "../../util/Style/variables";
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
			background: ${variables.colors.lightGray};
			padding: 30px;
			border-radius: 10px;
			position: relative;
			&__group {
				position: relative;
			}
			&__error {
				position: absolute;
				width: auto;
				background: ${variables.colors.red};
				color: ${variables.colors.white};
				text-align: center;
				border-radius: 6px;
				height: 24px;
				font-size: 16px;
				left: 10%;
				top: 5%;
				padding: 0 5%;
				&::after {
					background: ${variables.colors.red};
					border-left: 2px solid ${variables.colors.red};
					border-top: 2px solid ${variables.colors.red};
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
					border: 2px solid ${variables.colors.red};
				}
			}
			&__input {
				width: 350px;
				height: 60px;
				color: ${variables.colors.gray};
				border: 2px solid ${variables.colors.borderGray};
				border-radius: 6px;
				padding: 0 50px;
				margin-top: 20px;
				&.error {
					border: 2px solid ${variables.colors.red};
					color: ${variables.colors.red};
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
				color: ${variables.colors.gray};
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
