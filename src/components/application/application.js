import './application.scss';

function Application({ logout, user = {} }) {
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
      </main>
    </div>
  );
}

export default Application;
