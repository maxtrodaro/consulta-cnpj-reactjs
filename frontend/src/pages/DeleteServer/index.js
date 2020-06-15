import React from "react";
import { useHistory } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../components/Header/header";
import { RegisterButton } from "../../util/Style/global";
import { DeletePage } from "./style";
import api from "../../services/requestAPI";
import ResetInitialValues from "../../util/ResetsFormik/initialValues";

toast.configure();

export default function DeleteStore() {
	const history = useHistory();

	const handleSubmit = async (values) => {
		try {
			await api.delete(`/server/${values.server}`);

			toast.success("Servidor deletado com sucesso!", {
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
		} catch (erro) {
			toast.error(erro.response.data.error, {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
	};

	const validations = yup.object().shape({
		server: yup
			.string()
			.min(8, "O Servidor é no mínimo 8 digítos")
			.max(15, "O Servidor é no máximo 15 digítos")
			.required("Servidor obrigatório"),
	});

	return (
		<DeletePage>
			<Header />
			<section className="delete-container">
				<h2>Excluir servidor</h2>
				<Formik
					initialValues={ResetInitialValues}
					onSubmit={handleSubmit}
					validationSchema={validations}
				>
					{({ dirty, isValid }) => {
						const submitIsValid = !dirty || !isValid;

						return (
							<Form className="delete-container__form">
								<div className="delete-container__form__group">
									<ErrorMessage name="server" component="span" />
									<Field
										name="server"
										placeholder="Ip do Servidor:"
										type="text"
										className="delete-container__form__server"
									></Field>
									<p className="delete-container__form__serverIcon"></p>
								</div>
								<div className="delete-container__form__buttons">
									<RegisterButton type="submit" disabled={submitIsValid}>
										Excluir servidor
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
			<section className="delete-style"></section>
		</DeletePage>
	);
}
