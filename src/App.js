import React, { Suspense, useState, useEffect } from 'react';
import { isExpired, decodeToken } from 'react-jwt';

import { login } from './methods/user/user';

// Application and login are loaded lazily to enable fast login
const Application = React.lazy(() =>
  import('./components/application/application')
);
const Login = React.lazy(() => import('./components/login/login'));

function App() {
  const [user, setUser] = useState(false);
  const [loginError, setLoginError] = useState(false);

  // Read token from local storage on first render
  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken && decodedToken.email) {
        setUser({
          email: decodedToken.email
        });
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    setLoginError(false);
    login(email, password).then(
      (token) => {
        localStorage.setItem('user', token);
        setUser({
          email
        });
      },
      (response) => {
        setLoginError(response.error);
      }
    );
  };
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(false);
  };

  return (
    <Suspense fallback={<div>Loading... </div>}>
      {user ? (
        <Application user={user} logout={handleLogout} />
      ) : (
        <Login onSuccess={handleLogin} error={loginError} />
      )}
    </Suspense>
  );
}

export default App;
