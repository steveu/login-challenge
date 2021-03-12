import React, { useState } from 'react';
import './login.scss';

function Login({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    onSuccess(email, password);
  };

  return (
    <form className="login" method="post">
      <legend>Login</legend>
      <fieldset>
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            handleLogin();
          }}
          type="submit"
        >
          Login
        </button>
      </fieldset>
    </form>
  );
}

export default Login;
