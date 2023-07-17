import React from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
  isSelected: boolean;
  onClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ isSelected, onClick }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className={isSelected ? 'active' : ''} onClick={onClick}>
              Strona główna
            </Link>
          </li>
          <li>
            <Link to="/about" className={isSelected ? 'active' : ''} onClick={onClick}>
              O mnie
            </Link>
          </li>
          <li>
            <Link to="/projects" className={isSelected ? 'active' : ''} onClick={onClick}>
              Projekty
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isSelected ? 'active' : ''} onClick={onClick}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

