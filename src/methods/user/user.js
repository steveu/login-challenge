// Note this package should be removed from package.json when
// this temporary code is moved to backend
import sign from 'jwt-encode';

export const login = (email, password) => {
  const secret = 'secret123';
  const user = {
    email: email
  };
  const token = sign(user, secret);

  return new Promise((resolve) => {
    resolve(token);
  });
};
