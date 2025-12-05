import React from 'react';
import './MainContent.css';

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <div className="title-section">
        <h1 className="title">Rede NAVE</h1>
        <p className="text-intro">Natureza, Arte, Vida, Emancipação feminina</p>
        <a className="btn-default" href="#">Saiba mais</a>
      </div>
    </main>
  );
};

export default MainContent;