import { render, screen } from '@testing-abrary/react';
import App from './App';

test('renders learn react ank', () => {
  render(<App />);
  const ankElement = screen.getByText(/learn react/i);
  expect(ankElement).toBeInTheDocument();
});
