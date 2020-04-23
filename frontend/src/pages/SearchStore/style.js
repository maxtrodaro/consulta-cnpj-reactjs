import styled from "styled-components";

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
					background: #3a0d51;
					background: -webkit-linear-gradient(to right, #3a0d51, #621d3d);
					background: linear-gradient(to right, #3a0d51, #621d3d);
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
					height: 50vh;
					overflow: scroll;
					&__list {
						height: auto;
						width: 100%;
						&__item {
							display: flex;
							align-items: center;
							padding: 5px;
							background: #e0e0e0;
							&:nth-child(2n + 1) {
								background: #eeeeee;
							}
							&:hover {
								background: #3a0d51;
								background: -webkit-linear-gradient(to right, #3a0d51, #621d3d);
								background: linear-gradient(to right, #3a0d51, #621d3d);
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
					border: none;
					border-bottom: 0;
					border-radius: 6px 6px 0 0;
					background: #3a0d51;
					background: -webkit-linear-gradient(to left, #3a0d51, #621d3d);
					background: linear-gradient(to left, #3a0d51, #621d3d);
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
					height: 50vh;
					overflow: scroll;
					&__list {
						height: auto;
						width: 100%;
						&__item {
							display: flex;
							align-items: center;
							padding: 5px;
							background: #e0e0e0;
							&:nth-child(2n + 1) {
								background: #eeeeee;
							}
							&:hover {
								background: #3a0d51;
								background: -webkit-linear-gradient(to left, #3a0d51, #621d3d);
								background: linear-gradient(to left, #3a0d51, #621d3d);
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
		&-style {
			height: 70vh;
			width: 100%;
			background: #fafafa;
		}
	}
`;
