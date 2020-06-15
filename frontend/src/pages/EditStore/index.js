import React from "react";
import { useHistory } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../components/Header/header";
import { RegisterButton } from "../../util/Style/global";
import { EditPage } from "./style";
import api from "../../services/requestAPI";
import RegexCnpj from "../../util/Regex/regexCnpj";

toast.configure();

export default function EditStore() {
	const history = useHistory();

	const handleSubmit = async (values) => {
		try {
			const newCnpj = RegexCnpj(values.cnpj);

			if (newCnpj.length < 14) {
				toast.error("CNPJ Inválido", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			} else if (
				values.cod_emp.trim().length < 8 ||
				values.name.trim().length < 3
			) {
				toast.error("Preencha com informações válidas", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			} else {
				await api.put(`/store/${values.cnpj}`, values);

				toast.success("Loja alterada com sucesso!", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});

				if (sessionStorage.getItem("permission") === "project") {
					history.push("/homeproject");
				} else if (sessionStorage.getItem("permission") === "master") {
					history.push("/homemaster");
				} else if (sessionStorage.getItem("permission") === "search") {
					history.push("/homesearch");
				} else if (sessionStorage.getItem("permission") === "cloud") {
					history.push("/homecloud");
				}
			}
		} catch (erro) {
			toast.error(erro.response.data.error, {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
	};

	const validations = yup.object().shape({
		name: yup.string().required("Nome obrigatório"),
		cnpj: yup
			.string()
			.length(14, "O CNPJ são de 14 digítos")
			.required("CNPJ obrigatório"),
		cod_emp: yup
			.string()
			.length(8, "O Código são de 8 digítos")
			.required("Código obrigatório"),
		serv_ip: yup
			.string()
			.min(8, "O Servidor é no mínimo 8 digítos")
			.max(15, "O Servidor é no máximo 15 digítos")
			.required("Servidor obrigatório"),
	});

	return (
		<EditPage>
			<Header />
			<section className="edit-container">
				<h2>Editar loja</h2>
				<Formik
					initialValues={{}}
					onSubmit={handleSubmit}
					validationSchema={validations}
				>
					{({ dirty, isValid }) => {
						const submitIsValid = !dirty || !isValid;

						return (
							<Form className="edit-container__form">
								<div className="edit-container__form__left">
									<p className="edit-container__form__title">
										Informações da loja
									</p>
									<div className="edit-container__form__group">
										<ErrorMessage name="name" component="span" />
										<Field
											name="name"
											placeholder="Nome:"
											type="text"
											className="edit-container__form__left__name"
										/>
										<p className="edit-container__form__left__userIcon"></p>
									</div>
									<div className="edit-container__form__group">
										<ErrorMessage name="cnpj" component="span" />
										<Field
											name="cnpj"
											placeholder="CNPJ:"
											type="text"
											className="edit-container__form__left__cnpj"
										/>
										<p className="edit-container__form__left__cnpjIcon"></p>
									</div>
									<div className="edit-container__form__group">
										<ErrorMessage name="cod_emp" component="span" />
										<Field
											name="cod_emp"
											placeholder="Código da empresa:"
											type="text"
											className="edit-container__form__left__cod"
										/>
										<p className="edit-container__form__left__codIcon"></p>
									</div>
								</div>
								<div className="edit-container__form__right">
									<p className="edit-container__form__title">
										Ambiente da loja
									</p>
									<div className="edit-container__form__group">
										<ErrorMessage name="serv_ip" component="span" />
										<Field
											name="serv_ip"
											placeholder="Endereço do servidor:"
											type="text"
											className="edit-container__form__right__serv"
										/>
										<p className="edit-container__form__right__servIcon"></p>
									</div>
								</div>
								<div className="edit-container__form__buttons">
									<RegisterButton type="submit" disabled={submitIsValid}>
										Editar loja
									</RegisterButton>
									<RegisterButton
										onClick={() => {
											if (sessionStorage.getItem("permission") === "project") {
												history.push("/homeproject");
											} else if (
												sessionStorage.getItem("permission") === "master"
											) {
												history.push("/homemaster");
											} else if (
												sessionStorage.getItem("permission") === "search"
											) {
												history.push("/homesearch");
											} else if (
												sessionStorage.getItem("permission") === "cloud"
											) {
												history.push("/homecloud");
											}
										}}
									>
										Voltar
									</RegisterButton>
								</div>
							</Form>
						);
					}}
				</Formik>
			</section>
			<section className="edit-style"></section>
		</EditPage>
	);
}
