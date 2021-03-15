import { render, screen } from '@testing-library/react';
import Login from './login';

test('shows a form', () => {
  render(<Login />);
  const emailInput = screen.getByLabelText('Email:');
  expect(emailInput).toBeInTheDocument();
});
