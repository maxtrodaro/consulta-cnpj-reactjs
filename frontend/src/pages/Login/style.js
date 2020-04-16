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
			&__user {
				&::before {
					content: "";
					background: url(${iconUser}) no-repeat;
					position: absolute;
					display: block;
					height: 24px;
					width: 24px;
					top: 67px;
					left: 45px;
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
					top: 147px;
					left: 45px;
				}
			}
			&__link {
				display: flex;
				align-items: center;
				margin-top: 20px;
				color: #696969;
			}
		}
	}
`;
