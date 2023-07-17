import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../components/Contact/Contact';

describe('Contact component', () => {
  test('renders heading', () => {
    render(<Contact />);
    const headingElement = screen.getByRole('heading', { name: /Kontakt/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('form submission', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/Imię/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Wiadomość/i);
    const submitButton = screen.getByRole('button', { name: /Wyślij/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message' } });
    fireEvent.click(submitButton);

  });
});
