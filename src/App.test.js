import { render, screen } from '@testing-library/react';
import { LocalStorageMock } from '@react-mock/localstorage';
// Note this package should be removed from package.json when
// this temporary code is moved to backend
import sign from 'jwt-encode';

import App from './App';

const validUser = {
  email: 'steve@urm.st'
};
const secret = 'secret123';

test('shows a login form when not authenticated', () => {
  render(<App />);
  const emailInput = screen.getByLabelText('Email:');
  expect(emailInput).toBeInTheDocument();
});

test('shows the application when authenticated', async () => {
  const token = sign(validUser, secret);
  render(
    <LocalStorageMock items={{ user: token }}>
      <App />
    </LocalStorageMock>
  );
  const titleElement = screen.getByText(/Application/i);
  expect(titleElement).toBeInTheDocument();
});
