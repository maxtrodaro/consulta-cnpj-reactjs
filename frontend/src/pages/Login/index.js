import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './style.css';

import logoLinx from '../../assets/logo-linx.svg';

export default function Login() {
    return (
        <div className="login-container">
            <img
                src={logoLinx}
                alt="Linx"
            />
            <section className="login-container__form">
                <input className="input"
                    placeholder="Digite seu username"
                />
                <button className="button">Entrar</button>
                <Link className="register-link">
                    <FiLogIn
                        size={16}
                        color="#48185b"
                        style={{marginRight: '5px'}}
                    />
                    Não tenho cadastro
                </Link>
            </section>
        </div>
    );
}
