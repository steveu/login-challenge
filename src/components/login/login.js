import './login.scss';

function Login({
  onSuccess
}) {
  const handleLogin = () => {
    onSuccess();
  };

  return (
    <form className="login">
      <legend>Login</legend>
      <fieldset>
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <button onClick={() => { handleLogin(); }} type="submit">Login</button>
      </fieldset>
    </form>
  );
}

export default Login;
