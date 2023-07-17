import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects/Projects';

describe('Projects component', () => {
  test('renders heading', () => {
    render(<Projects />);
    const headingElement = screen.getByRole('heading', { name: /Projekty/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders project list', () => {
    render(<Projects />);
    const projectElements = screen.getAllByRole('listitem');
    expect(projectElements.length).toBe(3);
  });
});
