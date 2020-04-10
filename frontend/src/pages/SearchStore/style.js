import styled from "styled-components";

export const SearchPage = styled.section`
	.search-container {
		width: 95%;
		margin: 0 auto;
		&__top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			&__option {
				display: flex;
				align-items: center;
				margin-top: 20px;
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
				border: 2px solid #48185b;
				border-bottom: 0;
				border-radius: 6px 6px 0 0;
				background: #48185b;
				color: #fff;
				&__cnpj {
					width: 20%;
					text-align: center;
				}
				&__name {
					width: 45%;
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
			}
			&__bottom {
				width: 100%;
				height: 60vh;
				overflow: scroll;
				border: 2px solid #48185b;
				&__list {
					height: auto;
					width: 100%;
					&__item {
						display: flex;
						align-items: center;
						padding: 5px;
						&:not(:last-child) {
							border-bottom: 2px solid #48185b;
						}
						&:hover {
							background: #48185b;
							color: #fff;
						}
						&__cnpj {
							width: 20%;
							text-align: center;
						}
						&__name {
							width: 45%;
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
				border: 2px solid #48185b;
				border-bottom: 0;
				border-radius: 6px 6px 0 0;
				background: #48185b;
				color: #fff;
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
				height: 60vh;
				overflow: scroll;
				border: 2px solid #48185b;
				&__list {
					height: auto;
					width: 100%;
					&__item {
						display: flex;
						align-items: center;
						padding: 5px;
						&:not(:last-child) {
							border-bottom: 2px solid #48185b;
						}
						&:hover {
							background: #48185b;
							color: #fff;
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
`;
