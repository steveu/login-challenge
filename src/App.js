import React, { Suspense, useState } from 'react';

// Application and login are loaded lazily to enable fast login
const Application = React.lazy(() =>
  import('./components/application/application')
);
const Login = React.lazy(() => import('./components/login/login'));

function App() {
  const [user, setUser] = useState(false);
  const login = () => {
    setUser('test');
  };
  const logout = () => {
    setUser(false);
  };

  return (
    <div>
      <Suspense fallback={<div>Loading... </div>}>
        {user ? <Application logout={logout} /> : <Login onSuccess={login} />}
      </Suspense>
    </div>
  );
}

export default App;
