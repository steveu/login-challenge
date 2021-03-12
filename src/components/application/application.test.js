import { render, screen } from '@testing-library/react';
import Application from './application';

test('renders title', () => {
  render(<Application />);
  const titleElement = screen.getByText(/Login Challenge/i);
  expect(titleElement).toBeInTheDocument();
});
