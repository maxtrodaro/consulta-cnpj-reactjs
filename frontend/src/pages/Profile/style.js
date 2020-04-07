import styled from "styled-components";

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
			&__link {
				display: flex;
				align-items: center;
				margin-top: 20px;
			}
		}
	}
`;
