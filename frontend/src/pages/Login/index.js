import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
/**
 * Documentation url: https://feathericons.com/
 */
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/requestAPI';
import './style.css';

import logoLinx from '../../assets/logo-linx.svg';

export default function Login() {
    const [username, setUsername] = useState('');

    const history = useHistory();

    async function loginUsers(e) {
        e.preventDefault();

        try {
            const response = await api.post('/login', { username });

            localStorage.setItem('username', username);
            localStorage.setItem('name', response.data.name);

            history.push('/home');
        } catch (error) {
            alert('Falha no login, tente novamente!');
        }
    }

    return (
        <div className="login-container">
            <img
                src={logoLinx}
                alt="Linx"
            />
            <form
                className="login-container__form"
                onSubmit={loginUsers}
            >
                <input
                    className="input"
                    placeholder="Digite seu username"
                    onChange={e => setUsername(e.target.value)}
                />
                <button
                    className="button"
                    type="submit"
                >
                    Entrar
                </button>
                <Link
                    className="register-link"
                    to="/profile"
                >
                    <FiLogIn
                        size={16}
                        color="#48185b"
                        style={{marginRight: '5px'}}
                    />
                    Não tenho cadastro
                </Link>
            </form>
        </div>
    );
}
