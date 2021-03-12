import './application.scss';

function Application({ logout }) {
  return (
    <div className="application">
      <h1>Application</h1>

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
