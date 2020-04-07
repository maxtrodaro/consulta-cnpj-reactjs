import styled from "styled-components";

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
			&__link {
				display: flex;
				align-items: center;
				margin-top: 20px;
			}
		}
	}
`;
