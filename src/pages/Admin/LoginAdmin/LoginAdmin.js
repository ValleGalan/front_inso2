import React from 'react';
import "./LoginAdmin.css";
import { LoginForm} from "../../../components/LoginForm";

export function LoginAdmin() {
  return (
    <div className="login-admin">
      <div className="login-admin__content">
        <h1>Entrar al panel Administrador (Pages)</h1>
        <LoginForm />
      </div>
    </div>
  )
}
