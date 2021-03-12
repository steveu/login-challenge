import React from 'react';
import { useForm } from 'react-hook-form';

import ErrorMessage from '../error-message/error-message';
import './login.scss';

function Login({ onSuccess, error }) {
  const { register, handleSubmit, errors } = useForm();
  const handleLogin = (data) => {
    onSuccess(data.email, data.password);
  };

  return (
    <form className="login" onSubmit={handleSubmit(handleLogin)} noValidate>
      <h1 className="loginTitle">Login</h1>
      {error ? (
        <div className="globalError">
          <ErrorMessage error={{ message: error }} />
        </div>
      ) : null}

      <fieldset>
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue=""
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Enter a valid e-mail address'
              }
            })}
          />
          <ErrorMessage error={errors.email} />
        </div>
        <div className="field">
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            id="password"
            type="password"
            defaultValue=""
            ref={register({
              required: true
            })}
          />
          <ErrorMessage error={errors.password} />
        </div>
        <button className="button" type="submit">
          Login
        </button>
      </fieldset>
    </form>
  );
}

export default Login;
