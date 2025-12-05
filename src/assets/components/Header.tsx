import React from 'react';
import './Header.css'; // Importa o CSS específico do Header
import logo from '../assets/logo_nave 1.png'; // Ajuste o caminho
import banner from '../assets/croche-banner.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="navbar">
        <img src={logo} alt="Logo Rede NAVE" className="logo" />
        <nav className="nav-menu">
          <ul>
            <li className="nav-item"><a href="#">Início</a></li>
            <li className="nav-item"><a href="#">Trilhas</a></li>
            <li className="nav-item"><a href="#">Eventos</a></li>
            <li className="nav-item"><a href="#">Sobre</a></li>
          </ul>
        </nav>
        <div className="btn">
          <i className="fa-solid fa-user"></i>
          <a href="#">Login</a>
        </div>
      </div>
      <div className="header-banner">
        <img src={banner} alt="Banner de crochê" className="banner-image" />
      </div>
    </header>
  );
};

export default Header;