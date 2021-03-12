import { render, screen } from '@testing-library/react';
import App from './App';

test('shows a login form when not authenticated', () => {
  render(<App />);
  const emailInput = screen.getByLabelText('Email:');
  expect(emailInput).toBeInTheDocument();
});
