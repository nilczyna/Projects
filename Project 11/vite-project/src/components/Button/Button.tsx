import React from 'react';

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  children: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
