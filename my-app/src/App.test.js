import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /your name/i });
  expect(heading).toBeInTheDocument();
});
