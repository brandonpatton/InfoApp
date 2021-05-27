import { render, screen } from '@testing-library/react';
import InfoApp from './App';

test('renders learn react link', () => {
  render(<InfoApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
