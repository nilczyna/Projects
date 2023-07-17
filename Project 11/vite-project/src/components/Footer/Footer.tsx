import React from 'react';

type FooterProps = {
  copyright: string;
};

const Footer: React.FC<FooterProps> = ({ copyright }) => {
  return <footer>&copy; {copyright}</footer>;
};

export default Footer;
