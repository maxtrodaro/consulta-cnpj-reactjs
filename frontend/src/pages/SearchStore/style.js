import styled from "styled-components";

import variables from "../../util/Style/variables";

export const SearchPage = styled.section`
	.search {
		&-container {
			margin: 0 auto;
			padding: 0 5%;
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;
			height: 20vh;
			&__top {
				display: flex;
				align-items: center;
				justify-content: center;
				&__option {
					display: flex;
					align-items: center;
					margin: 20px 0 50px 0;
				}
			}
			&__content {
				width: 61%;
				&__items {
					display: flex;
					align-items: center;
					width: 100%;
					margin-top: 10px;
					padding: 5px;
					border: none;
					border-bottom: 0;
					border-radius: 6px 6px 0 0;
					background: ${variables.colors.primaryColor};
					background: -webkit-linear-gradient(
						to right,
						${variables.colors.primaryColor},
						${variables.colors.linearColor}
					);
					background: linear-gradient(
						to right,
						${variables.colors.primaryColor},
						${variables.colors.linearColor}
					);
					color: ${variables.colors.white};
					position: relative;
					&__counter {
						position: absolute;
						top: -100px;
						p {
							font-size: 18px;
							b {
								font-weight: 700;
							}
						}
					}
					&__cnpj {
						width: 20%;
						text-align: center;
					}
					&__name {
						width: 35%;
						text-align: center;
					}
					&__cod {
						width: 15%;
						text-align: center;
					}
					&__serv {
						width: 15%;
						text-align: center;
					}
					&__data {
						width: 15%;
						text-align: center;
					}
				}
				&__bottom {
					width: 100%;
					height: 50vh;
					overflow: scroll;
					&__list {
						height: auto;
						width: 100%;
						&__item {
							display: flex;
							align-items: center;
							padding: 5px;
							background: ${variables.colors.borderGray};
							&:nth-child(2n + 1) {
								background: ${variables.colors.backgroundGray};
							}
							&:hover {
								background: ${variables.colors.primaryColor};
								background: -webkit-linear-gradient(
									to right,
									${variables.colors.primaryColor},
									${variables.colors.linearColor}
								);
								background: linear-gradient(
									to right,
									${variables.colors.primaryColor},
									${variables.colors.linearColor}
								);
								color: ${variables.colors.white};
							}
							&__cnpj {
								width: 20%;
								text-align: center;
							}
							&__name {
								width: 35%;
								text-overflow: ellipsis;
								overflow: hidden;
								white-space: nowrap;
							}
							&__cod {
								width: 15%;
								text-align: center;
							}
							&__serv {
								width: 15%;
								text-align: center;
							}
							&__data {
								width: 15%;
								text-align: center;
							}
						}
					}
				}
			}
			&__servs {
				width: 38%;
				&__items {
					display: flex;
					align-items: center;
					width: 100%;
					margin-top: 10px;
					padding: 5px;
					border: none;
					border-bottom: 0;
					border-radius: 6px 6px 0 0;
					background: ${variables.colors.primaryColor};
					background: -webkit-linear-gradient(
						to left,
						${variables.colors.primaryColor},
						${variables.colors.linearColor}
					);
					background: linear-gradient(
						to left,
						${variables.colors.primaryColor},
						${variables.colors.linearColor}
					);
					color: ${variables.colors.white};
					position: relative;
					&__counter {
						position: absolute;
						top: -100px;
						right: 0;
						p {
							font-size: 18px;
							b {
								font-weight: 700;
							}
						}
					}
					&__name {
						width: 60%;
						text-align: center;
					}
					&__serv {
						width: 20%;
						text-align: center;
					}
					&__qtd {
						width: 20%;
						text-align: center;
					}
				}
				&__bottom {
					width: 100%;
					height: 50vh;
					overflow: scroll;
					&__list {
						height: auto;
						width: 100%;
						&__item {
							display: flex;
							align-items: center;
							padding: 5px;
							background: ${variables.colors.borderGray};
							&:nth-child(2n + 1) {
								background: ${variables.colors.backgroundGray};
							}
							&:hover {
								background: ${variables.colors.primaryColor};
								background: -webkit-linear-gradient(
									to left,
									${variables.colors.primaryColor},
									${variables.colors.linearColor}
								);
								background: linear-gradient(
									to left,
									${variables.colors.primaryColor},
									${variables.colors.linearColor}
								);
								color: ${variables.colors.white};
							}
							&__name {
								width: 60%;
							}
							&__serv {
								width: 20%;
								text-align: center;
							}
							&__qtd {
								width: 20%;
								text-align: center;
							}
						}
					}
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
