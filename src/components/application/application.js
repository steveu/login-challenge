import './application.scss';

function Application({ logout, user = {} }) {
  return (
    <div className="application">
      <h1>Application</h1>
      <p>Logged in as {user.email}</p>
      <button
        type="button"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Application;
