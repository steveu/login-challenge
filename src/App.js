import React, { Fragment, useState, useEffect } from 'react';
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
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [hasCheckedUser, setHasCheckedUser] = useState(false);

  // Read token from local storage on first render
  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      const decodedToken = decodeToken(token);
      // TODO: Check token expiry/validity
      if (decodedToken && decodedToken.email) {
        setUser({
          email: decodedToken.email
        });
      }
    }
    setHasCheckedUser(true);
  }, []);

  const handleLogin = async (email, password) => {
    setLoginError(null);
    try {
      const token = await login(email, password);
      localStorage.setItem('user', token);
      setUser({
        email
      });
    } catch (response) {
      setLoginError(response.error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return hasCheckedUser ? (
    <Fragment>
      {user ? (
        <Application user={user} logout={handleLogout} />
      ) : (
        <Login onSubmit={handleLogin} error={loginError} />
      )}
    </Fragment>
  ) : null;
}

export default App;
