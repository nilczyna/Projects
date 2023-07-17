import React from "react";
import "./Projects.css";

type ProjectsProps = {
  isSelected: boolean;
  onClick: () => void;
};

const Projects: React.FC<ProjectsProps> = ({ isSelected, onClick }) => {
  return (
    <div className={`projects ${isSelected ? 'active' : ''}`} onClick={onClick}>
      <h1>Projekty</h1>
      <ul>
        <li>Projekt 1</li>
        <li>Projekt 2</li>
        <li>Projekt 3</li>
      </ul>
    </div>
  );
};

export default Projects;

