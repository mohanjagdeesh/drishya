import { render, screen } from '@testing-library/react';
import App from './App';
import DestinationsServed from './components/DestinationsServed';
import FooterSection from './components/FooterSection';

test('Destination Served', () => {
  render(<FooterSection />);
  const linkElement = screen.getByText(/PROHIBITED ITEMS/i);
  expect(linkElement).toBeInTheDocument();
});
