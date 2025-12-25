import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import 'primeflex/primeflex.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{ height: '100vh' }}>
      <div style={{ width: '300px' }}>
        <h3>Seja Bem-vindo</h3>
        <form onSubmit={handleSubmit}>
          <div><label htmlFor="email">Email</label> <InputText id="email" type="email" placeholder="email@example.com" /></div>
          <div><label htmlFor="password">Senha</label> <Password id="password" placeholder="Senha" /></div>
          <Button type="submit" label="Entrar" />
        </form>
      </div>
    </div>
  );
};

export default Login;