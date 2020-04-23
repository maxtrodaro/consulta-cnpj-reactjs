import styled from "styled-components";

import iconCnpj from "../../assets/icon-cnpj.svg";

export const DeletePage = styled.section`
	.delete {
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
				width: 40%;
				background: #f5f5f5;
				border-radius: 10px;
				height: 35%;
				padding: 3%;
				top: 30%;
				&__group {
					position: relative;
					width: 100%;
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
					width: 100%;
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
				&__cnpjIcon {
					background: url(${iconCnpj}) no-repeat;
					position: absolute;
					display: block;
					height: 28px;
					width: 24px;
					top: 40px;
					left: 20px;
				}
				&__buttons {
					width: 100%;
					position: absolute;
					bottom: 10%;
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
