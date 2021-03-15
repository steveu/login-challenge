import { render, screen } from '@testing-library/react';
import Application from './application';

test('renders title', () => {
  render(<Application />);
  const titleElement = screen.getByText(/Application/i);
  expect(titleElement).toBeInTheDocument();
});
