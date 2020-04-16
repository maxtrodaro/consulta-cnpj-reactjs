import styled from "styled-components";

import iconName from "../../assets/icon-name.png";
import iconUser from "../../assets/icon-user.png";

export const ProfilePage = styled.section`
	.register-container {
		width: 55%;
		height: 100vh;
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
			&__link {
				display: flex;
				align-items: center;
				margin-top: 20px;
				color: #696969;
			}
		}
	}
`;
