import styled from "styled-components";

import variables from "../../util/Style/variables";

export const HomePage = styled.section`
	.home-container {
		&__buttons {
			width: 70%;
			position: absolute;
			z-index: 9;
			top: 30%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			right: 0;
			left: 0;
			margin: 0 auto;
			&__group {
				display: flex;
				flex-direction: column;
				align-items: center;
				background: ${variables.colors.white};
				border-radius: 6px 6px 0 0;
				img {
					padding: 40px;
					width: 220px;
					height: 220px;
				}
			}
		}
		&__style {
			width: 100%;
			height: 200px;
			background: ${variables.colors.white};
			position: absolute;
			top: 46%;
		}
		&__style2 {
			width: 100%;
			height: 200px;
			background: ${variables.colors.white};
			position: absolute;
			top: 62%;
			border-radius: 90% 90% 100% 100%;
		}
	}
`;
