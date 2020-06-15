import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Select, MenuItem } from "@material-ui/core";

import logoLinx from "../../assets/logo-linx.svg";
import { Button } from "../../util/Style/global";
import { ProfilePage } from "./style";
import api from "../../services/requestAPI";
import ResetInitialValues from "../../util/ResetsFormik/initialValues";
import RemoveWhiteSpace from "../../util/Regex/regexWhiteSpace";

toast.configure();

export default function Register() {
	const history = useHistory();

	const handleSubmit = async (values) => {
		try {
			if (
				RemoveWhiteSpace(values.username) ||
				RemoveWhiteSpace(values.password)
			) {
				toast.error("Remova os espaços em branco", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			} else {
				const response = await api.post("/profile", values);

				toast.success(response.data.user, {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});

				history.push("/");
			}
		} catch (erro) {
			toast.error(erro.response.data.error, {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
	};

	const validations = yup.object().shape({
		name: yup
			.string()
			.min(8, "Nome mínimo de 8 digítos")
			.required("Nome obrigatório"),
		username: yup.string().required("Usuário obrigatório"),
		password: yup
			.string()
			.min(8, "Senha mínima de 8 digítos")
			.required("Senha obrigatória"),
		permission: yup
			.string()
			.min(5, "Permissão mínima de 5 digítos")
			.required("Selecione um perfil"),
	});

	return (
		<ProfilePage>
			<div className="register-container">
				<Formik
					initialValues={ResetInitialValues}
					onSubmit={handleSubmit}
					validationSchema={validations}
				>
					{({ dirty, isValid }) => {
						const submitIsValid = !dirty || !isValid;

						return (
							<Form className="register-container__form">
								<div className="register-container__form__group">
									<ErrorMessage
										name="name"
										component="span"
										className="register-container__form__error"
									/>
									<Field
										name="name"
										placeholder="Digite seu nome completo"
										type="text"
										className={`register-container__form__input`}
									/>
									<p className="register-container__form__name"></p>
								</div>
								<div className="register-container__form__group">
									<ErrorMessage
										name="username"
										component="span"
										className="register-container__form__error"
									/>
									<Field
										name="username"
										placeholder="Digite seu usuário"
										type="text"
										className={`register-container__form__input`}
									/>
									<p className="register-container__form__user"></p>
								</div>
								<div className="register-container__form__group">
									<ErrorMessage
										name="password"
										component="span"
										className="register-container__form__error"
									/>
									<Field
										name="password"
										placeholder="Digite sua senha"
										type="password"
										className={`register-container__form__input`}
									/>
									<p className="register-container__form__pass"></p>
								</div>
								<div className="register-container__form__group">
									<ErrorMessage
										name="permission"
										component="span"
										className="register-container__form__error"
									/>
									<Field
										name="permission"
										placeholder="Digite sua permissão"
										type="select"
										as={Select}
										className={`register-container__form__input`}
									>
										<MenuItem value="cloud" name="cloud">
											Cloud
										</MenuItem>
										<MenuItem value="search" name="search">
											Consultas
										</MenuItem>
										<MenuItem value="master" name="master">
											Master
										</MenuItem>
										<MenuItem value="project" name="project">
											Projetos
										</MenuItem>
									</Field>
									<p className="register-container__form__perm"></p>
								</div>
								<Button type="submit" disabled={submitIsValid}>
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
						);
					}}
				</Formik>
				<img src={logoLinx} alt="Logo Linx" />
			</div>
			<p className={`register-container__message e-none`}>
				Cadastro inválido. Tente novamente
			</p>
		</ProfilePage>
	);
}
