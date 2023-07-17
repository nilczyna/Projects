import React from "react";
import "./Home.css";

type HomeProps = {
  isSelected: boolean;
  onClick: () => void;
};

const Home: React.FC<HomeProps> = ({ isSelected, onClick }) => {
  return (
    <div className={`home ${isSelected ? 'active' : ''}`} onClick={onClick}>
      <h1>Strona główna</h1>
      <p>
        Witaj na stronie głównej! Tutaj możesz umieścić treść związana z Twoją
        aplikacją lub prezentować swoje najnowsze wiadomości lub oferty.
      </p>
    </div>
  );
};

export default Home;
