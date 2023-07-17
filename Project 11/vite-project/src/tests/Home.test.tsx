import { render, screen } from '@testing-library/react';
import Home from '../components/Home/Home';
describe('Home component', () => {
  test('renders heading', () => {
    render(<Home />);
    const headingElement = screen.getByRole('heading', { name: /Strona główna/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders content', () => {
    render(<Home />);
    const contentElement = screen.getByText(/Witaj na stronie głównej/i);
    expect(contentElement).toBeInTheDocument();
  });
});
