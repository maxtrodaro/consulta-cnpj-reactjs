import styled from "styled-components";

import variables from "../../util/Style/variables";
import iconUser from "../../assets/icon-user.png";
import iconCnpj from "../../assets/icon-cnpj.svg";
import iconCod from "../../assets/icon-cod.svg";
import iconServer from "../../assets/icon-serv.svg";

export const RegisterPage = styled.section`
	.register {
		&-container {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;
			height: 20vh;
			h2 {
				text-transform: uppercase;
				color: ${variables.colors.white};
				font-size: 28px;
			}
			&__form {
				display: flex;
				justify-content: space-between;
				position: absolute;
				width: 70%;
				background: ${variables.colors.lightGray};
				border-radius: 10px;
				height: 70%;
				padding: 3%;
				top: 28%;
				&__group {
					position: relative;
				}
				&__title {
					text-transform: uppercase;
					width: 100%;
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
					text-align: center;
					height: 60px;
					line-height: 60px;
					border-radius: 6px 6px 0 0;
					font-size: 18px;
					font-weight: 700;
				}
				&__left {
					display: flex;
					align-items: center;
					flex-direction: column;
					max-height: 300px;
					position: relative;
					width: 40%;
					&::after {
						content: "";
						height: 300px;
						max-height: 300px;
						width: 1px;
						background: ${variables.colors.mediumGray};
						position: absolute;
						right: -25%;
					}
					span {
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
					input {
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
					&__userIcon {
						background: url(${iconUser}) no-repeat;
						position: absolute;
						display: block;
						height: 28px;
						width: 24px;
						top: 35px;
						left: 15px;
					}
					&__cnpjIcon {
						background: url(${iconCnpj}) no-repeat;
						position: absolute;
						display: block;
						height: 28px;
						width: 24px;
						top: 40px;
						left: 15px;
					}
					&__codIcon {
						background: url(${iconCod}) no-repeat;
						position: absolute;
						display: block;
						height: 28px;
						width: 24px;
						top: 40px;
						left: 15px;
					}
				}
				&__right {
					display: flex;
					align-items: center;
					flex-direction: column;
					max-height: 300px;
					position: relative;
					width: 40%;
					span {
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
					input {
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
					&__servIcon {
						background: url(${iconServer}) no-repeat;
						position: absolute;
						display: block;
						height: 28px;
						width: 24px;
						top: 40px;
						left: 15px;
					}
				}
				&__buttons {
					width: 100%;
					position: absolute;
					bottom: 3%;
					left: 0;
					right: 0;
					margin: 0 auto;
					display: flex;
					justify-content: center;
					flex-direction: row-reverse;
				}
			}
		}
		&-style {
			height: 70vh;
			width: 100%;
			background: ${variables.colors.backgroundWhite};
		}
	}
`;
