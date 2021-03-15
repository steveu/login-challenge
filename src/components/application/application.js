import React, { useState } from 'react';
import './application.scss';
import StatsBody from "./StatsBody";
import StatsResults from "./StatsResults";

function Application({ logout, user = {} }) {
  const [ route, setRoute ] = useState("form");
  const [ body, setBody ] = useState("body");

  return (
    <div className="application">
      <header className="header">
        <h1>Application</h1>
        <div className="user">
          <p className="userEmail">{user.email}</p>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      </header>
      <main>
        <h1>Dashboard</h1>

        {route === "form"
          ? (<StatsBody switchRoute={body => {
            setRoute("results");
            setBody(body);
          }} />)
          : (<StatsResults body={body} />)
        }

      </main>
    </div>
  );
}

export default Application;
