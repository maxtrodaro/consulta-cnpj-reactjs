import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap");

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body {
		font: 400 14px OpenSans, sans-serif;
		background-color: #cccccc;
		-webkit-font-smoothing: antialiased;
	}

	input,
	button {
		font: 400 18px OpenSans, sans-serif;
	}

	button {
		cursor: pointer;
		background: transparent;
		border: none;
		margin-top: 10px;
		text-align: left;
	}

	a {
		text-decoration: none;
	}
`;
