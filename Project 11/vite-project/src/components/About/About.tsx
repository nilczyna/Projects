import React from "react";
import "./About.css";

type AboutProps = {
  children: string;
};

const About: React.FC<AboutProps> = ({ children }) => {
  return ( 
    <div className="about">
      <h1>O mnie</h1>
      <p>
        {children}
      </p>
    </div>
  );
};

export default About;
