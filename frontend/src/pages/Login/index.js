import React from "react";
import { Link, useHistory } from "react-router-dom";
/**
 * Documentation url: https://feathericons.com/
 */
import { FiLogIn } from "react-icons/fi";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LoginPage } from "./style";
import api from "../../services/requestAPI";
import logoLinx from "../../assets/logo-linx.svg";
import { Button } from "../../util/Style/global";
import ResetInitialValues from "../../util/ResetsFormik/initialValues";

toast.configure();

export default function Login() {
	sessionStorage.clear();
	const history = useHistory();

	const handleSubmit = async (values) => {
		try {
			const response = await api.post("/authenticate", values);

			const token = response.data.token;

			sessionStorage.setItem("username", response.data.user.username);
			sessionStorage.setItem("name", response.data.user.name);
			sessionStorage.setItem("permission", response.data.user.permission);

			try {
				await api.get("/token", {
					headers: {
						Authorization: "Bearer " + token,
					},
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
		} catch (erro) {
			toast.error(erro.response.data.error, {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
	};

	const validations = yup.object().shape({
		username: yup.string().required("Usuário obrigatório"),
		password: yup
			.string()
			.min(8, "Senha mínima de 8 digítos")
			.required("Senha obrigatória"),
	});

	return (
		<LoginPage>
			<div className="login-container">
				<img src={logoLinx} alt="Linx" />
				<Formik
					initialValues={ResetInitialValues}
					onSubmit={handleSubmit}
					validationSchema={validations}
				>
					{({ dirty, isValid }) => {
						const submitIsDisabled = !dirty || !isValid;

						return (
							<Form className="login-container__form">
								<div className="login-container__form__group">
									<ErrorMessage
										component="span"
										name="username"
										className="login-container__form__error"
									/>
									<Field
										name="username"
										placeholder="Usuário:"
										type="text"
										className={`login-container__form__input`}
									/>
									<p className="login-container__form__user"></p>
								</div>
								<div className="login-container__form__group">
									<ErrorMessage
										component="span"
										name="password"
										className="login-container__form__error"
									/>
									<Field
										name="password"
										placeholder="Senha:"
										type="password"
										className="login-container__form__input"
									/>
									<p className="login-container__form__password"></p>
								</div>
								<Button type="submit" disabled={submitIsDisabled}>
									Entrar
								</Button>
								<Link className="login-container__form__link" to="/profile">
									<FiLogIn
										size={16}
										color="#696969"
										style={{ marginRight: "5px" }}
									/>
									Não tenho cadastro
								</Link>
							</Form>
						);
					}}
				</Formik>
				<p className={`login-container__message e-none`}>
					Usuário inválido. Tente novamente
				</p>
			</div>
		</LoginPage>
	);
}
