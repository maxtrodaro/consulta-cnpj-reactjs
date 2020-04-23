import styled from "styled-components";

import iconUser from "../../assets/icon-user.png";
import iconCnpj from "../../assets/icon-cnpj.svg";
import iconCod from "../../assets/icon-cod.svg";
import iconServer from "../../assets/icon-serv.svg";

export const EditPage = styled.section`
	.edit {
		&-container {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;
			height: 20vh;
			h2 {
				text-transform: uppercase;
				color: #fff;
				font-size: 28px;
			}
			&__form {
				display: flex;
				justify-content: space-between;
				position: absolute;
				width: 70%;
				background: #f5f5f5;
				border-radius: 10px;
				height: 70%;
				padding: 3%;
				top: 26%;
				&__group {
					position: relative;
				}
				&__title {
					text-transform: uppercase;
					width: 100%;
					background: #3a0d51;
					background: -webkit-linear-gradient(to right, #3a0d51, #621d3d);
					background: linear-gradient(to right, #3a0d51, #621d3d);
					color: #fff;
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
						background: #cccccc;
						position: absolute;
						right: -25%;
					}
					span {
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
					input {
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
					&__userIcon {
						background: url(${iconUser}) no-repeat;
						position: absolute;
						display: block;
						height: 28px;
						width: 24px;
						top: 40px;
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
					input {
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
					text-align: center;
				}
			}
		}
		&-style {
			height: 70vh;
			width: 100%;
			background: #fafafa;
		}
	}
`;
