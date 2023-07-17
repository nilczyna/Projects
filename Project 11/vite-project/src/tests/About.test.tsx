import { render, screen } from '@testing-library/react';
import About from '../components/About/About';

describe('About component', () => {
  test('renders heading', () => {
    render(<About />);
    const headingElement = screen.getByRole('heading', { name: /O mnie/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders content', () => {
    render(<About />);
    const contentElement = screen.getByText(/Jestem pasjonatem programowania/i);
    expect(contentElement).toBeInTheDocument();
  });
});
