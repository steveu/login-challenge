import './error-message.scss';

function ErrorMessage(error) {
  return error.error ? (
    <p className="error">{error.error.message || 'Field is required'}</p>
  ) : null;
}

export default ErrorMessage;
