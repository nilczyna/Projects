import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button component', () => {
  test('renders button with correct text', () => {
    const { getByText } = render(<Button onClick={() => {}}>Click me</Button>);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('button is disabled when disabled prop is true', () => {
    const { getByText } = render(<Button onClick={() => {}} disabled={true}>Click me</Button>);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeDisabled();
  });
});
