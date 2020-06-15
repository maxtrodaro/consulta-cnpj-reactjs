import styled from "styled-components";

import variables from "../../util/Style/variables";

export const HeaderPage = styled.section`
	.header-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 70%;
		margin: 0 auto;
		padding: 20px 0;
		&__left {
			display: flex;
			align-items: center;
			img {
				cursor: pointer;
			}
			p {
				font-size: 18px;
				margin: 30px 0 0 24px;
				color: ${variables.colors.white};
			}
		}
		&__logout {
			border: none;
			padding: 10px;
			border-radius: 6px;
			display: flex;
			align-items: center;
			font-size: 20px;
			background: ${variables.colors.white};
			color: ${variables.colors.primaryColor};
			line-height: 28px;
			svg {
				margin-right: 10px;
			}
		}
	}
`;
