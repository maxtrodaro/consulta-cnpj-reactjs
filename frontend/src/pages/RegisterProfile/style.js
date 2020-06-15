import styled from "styled-components";

import variables from "../../util/Style/variables";
import iconName from "../../assets/icon-name.png";
import iconUser from "../../assets/icon-user.png";
import iconPass from "../../assets/icon-pass.png";
import iconPerm from "../../assets/icon-perm.svg";

export const ProfilePage = styled.section`
	.register-container {
		width: 55%;
		height: 90vh;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		&__form {
			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-direction: column;
			position: relative;
			background: ${variables.colors.lightGray};
			padding: 30px;
			border-radius: 10px;
			margin-right: 30px;
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
				z-index: 1;
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
			.MuiInput-underline:after {
				position: relative;
			}
			&__input {
				width: 350px;
				height: 60px;
				color: ${variables.colors.gray};
				border: 2px solid ${variables.colors.borderGray};
				border-radius: 6px;
				padding: 0 0 0 50px;
				margin-top: 20px;
				background: ${variables.colors.white};
				&::before {
					content: "";
					position: relative;
				}
				&.error {
					border: 2px solid ${variables.colors.red};
					color: ${variables.colors.red};
				}
				.MuiSelect-select {
					&:focus {
						background: ${variables.colors.white};
					}
				}
			}
			&__name {
				&::before {
					content: "";
					background: url(${iconName}) no-repeat;
					position: absolute;
					display: block;
					height: 30px;
					width: 32px;
					top: 35px;
					left: 15px;
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
					top: 35px;
					left: 15px;
				}
			}
			&__pass {
				&::before {
					content: "";
					background: url(${iconPass}) no-repeat;
					position: absolute;
					display: block;
					height: 30px;
					width: 32px;
					top: 35px;
					left: 15px;
				}
			}
			&__perm {
				&::before {
					content: "";
					background: url(${iconPerm}) no-repeat;
					position: absolute;
					display: block;
					height: 30px;
					width: 32px;
					top: 40px;
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
			text-align: center;
			&.e-none {
				display: none;
			}
			&.e-active {
				display: block;
			}
		}
	}
`;
