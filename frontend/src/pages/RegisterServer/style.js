import styled from "styled-components";

import variables from "../../util/Style/variables";
import iconNameServer from "../../assets/icon-server-name.svg";
import iconServer from "../../assets/icon-serv.svg";

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
				color: ${variables.colors.white};
				font-size: 28px;
			}
			&__form {
				display: flex;
				flex-direction: column;
				position: absolute;
				width: 40%;
				background: ${variables.colors.lightGray};
				border-radius: 10px;
				height: 50%;
				padding: 2.5%;
				top: 30%;
				&__group {
					position: relative;
					width: 100%;
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
					width: 100%;
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
				&__nameIcon {
					background: url(${iconNameServer}) no-repeat;
					position: absolute;
					display: block;
					height: 28px;
					width: 25px;
					top: 40px;
					left: 20px;
				}
				&__serverIcon {
					background: url(${iconServer}) no-repeat;
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
