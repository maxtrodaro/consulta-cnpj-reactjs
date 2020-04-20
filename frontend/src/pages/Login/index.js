import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
/**
 * Documentation url: https://feathericons.com/
 */
import { FiLogIn } from "react-icons/fi";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

import { LoginPage } from "./style";

import api from "../../services/requestAPI";

import logoLinx from "../../assets/logo-linx.svg";
import { Button } from "../../util/Style/global";

export default function Login() {
	const [inputError, setInputError] = useState(false);

	const history = useHistory();

	const handleSubmit = async (values) => {
		try {
			const response = await api.post("/authenticate", values);

			const token = response.data.token;
			sessionStorage.setItem("username", response.data.user[0].username);
			sessionStorage.setItem("name", response.data.user[0].name);

			try {
				await api.get("/token", {
					headers: {
						Authorization: "Bearer " + token,
					},
				});
				history.push("/home");
			} catch (error) {
				throw new Error(error);
			}
		} catch (error) {
			throw new Error(error);
		}
	};

	const validations = yup.object().shape({
		username: yup.string().required("Required"),
		password: yup.string().min(3).required("Required"),
	});

	return (
		<LoginPage>
			<div className="login-container">
				<img src={logoLinx} alt="Linx" />
				<Formik
					initialValues={{}}
					onSubmit={handleSubmit}
					validationSchema={validations}
				>
					<Form className="login-container__form">
						<ErrorMessage
							component="span"
							name="username"
							className="login-container__form__error"
						/>
						<Field
							name="username"
							placeholder="Usuário:"
							type="text"
							className={`login-container__form__input ${
								inputError ? "error" : ""
							}`}
						/>
						<p className="login-container__form__user"></p>
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
						<Button type="submit" onClick={() => setInputError(!inputError)}>
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
				</Formik>
				<p
					className={`login-container__message ${
						inputError ? "e-active" : "e-none"
					}`}
				>
					Usuário inválido. Tente novamente
				</p>
			</div>
		</LoginPage>
	);
}
