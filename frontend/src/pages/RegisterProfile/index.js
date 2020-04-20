import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

import logoLinx from "../../assets/logo-linx.svg";

import { Button } from "../../util/Style/global";
import { ProfilePage } from "./style";
import api from "../../services/requestAPI";

export default function Register() {
	const [inputError, setInputError] = useState(false);

	const history = useHistory();

	const handleSubmit = async (values) => {
		try {
			await api.post("/profile", values);

			history.push("/");
		} catch (error) {
			throw new Error(error);
		}
	};

	const validations = yup.object().shape({
		name: yup.string().min(8).required(),
		username: yup.string().required(),
		password: yup.string().min(8).required(),
	});

	return (
		<ProfilePage>
			<div className="register-container">
				<Formik
					initialValues={{}}
					onSubmit={handleSubmit}
					validationSchema={validations}
				>
					<Form className="register-container__form">
						<ErrorMessage
							name="name"
							component="span"
							className="register-container__form__error"
						/>
						<Field
							name="name"
							placeholder="Digite seu nome completo"
							type="text"
							className={`register-container__form__input ${
								inputError ? "error" : ""
							}`}
						/>
						<p className="register-container__form__name"></p>
						<ErrorMessage
							name="username"
							component="span"
							className="register-container__form__error"
						/>
						<Field
							name="username"
							placeholder="Digite seu usuário"
							type="text"
							className={`register-container__form__input ${
								inputError ? "error" : ""
							}`}
						/>
						<p className="register-container__form__user"></p>
						<ErrorMessage
							name="password"
							component="span"
							className="register-container__form__error"
						/>
						<Field
							name="password"
							placeholder="Digite sua senha"
							type="password"
							className={`register-container__form__input ${
								inputError ? "error" : ""
							}`}
						/>
						<p className="register-container__form__pass"></p>
						<Button type="submit" onClick={() => setInputError(!inputError)}>
							Finalizar Cadastro
						</Button>
						<Link className="register-container__form__link" to="/">
							<FiArrowLeftCircle
								size={16}
								color="#696969"
								style={{ marginRight: "10px" }}
							/>
							Voltar para o login
						</Link>
					</Form>
				</Formik>
				<img src={logoLinx} alt="Logo Linx" />
			</div>
			<p
				className={`register-container__message ${
					inputError ? "e-active" : "e-none"
				}`}
			>
				Cadastro inválido. Tente novamente
			</p>
		</ProfilePage>
	);
}
