import React, { useState, useEffect } from 'react';
import { isExpired, decodeToken } from 'react-jwt';

import { login } from './methods/user/user';

/*
  These component could be lazily loaded, e.g.
  const Login = React.lazy(() => import('./components/login/login'));
  To allow for fast showing of the login form
  (I couldn't quickly get Suspense to work with the testing library)
*/
import Application from './components/application/application';
import Login from './components/login/login';

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
    <div>
      {user ? (
        <Application user={user} logout={handleLogout} />
      ) : (
        <Login onSuccess={handleLogin} error={loginError} />
      )}
    </div>
  );
}

export default App;
