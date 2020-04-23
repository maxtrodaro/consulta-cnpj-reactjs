import styled from "styled-components";

import iconName from "../../assets/icon-name.png";
import iconUser from "../../assets/icon-user.png";
import iconPass from "../../assets/icon-pass.png";

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
			background: #f5f5f5;
			padding: 30px;
			border-radius: 10px;
			margin-right: 30px;
			&__error {
				display: none;
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
			&__name {
				&::before {
					content: "";
					background: url(${iconName}) no-repeat;
					position: absolute;
					display: block;
					height: 30px;
					width: 32px;
					top: 63px;
					left: 40px;
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
					top: 147px;
					left: 45px;
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
					top: 225px;
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