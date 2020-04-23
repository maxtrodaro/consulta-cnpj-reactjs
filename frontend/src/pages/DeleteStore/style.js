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
				span {
					display: none;
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
					top: 80px;
					left: 60px;
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
