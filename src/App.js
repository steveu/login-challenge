import React, { useState } from "react";

import Application from './components/application/application';
import Login from './components/login/login';

function App() {
  const [user, setUser] = useState(false);
  const login = () => {
    setUser("test");
  }
  const logout = () => {
    setUser(false);
  }

  return user ? <Application logout={logout} /> : <Login onSuccess={login} />;
}

export default App;
