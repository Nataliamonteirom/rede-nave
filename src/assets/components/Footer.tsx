import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="rodape">
      <div className="footer-content">
        <div className="footer-sections">
          <section className="footer-social" aria-label="Redes sociais">
            <h3>Siga-nos:</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/17VZfjPwUd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/rede_nave?igsh=M3YyOWkzN3lod25h" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@redenave" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </section>

          <section className="footer-contatos">
            <h3>Fale com a gente</h3>
            <address>
              <p>Telefone: (98) 986078292</p>
              <p>Telefone: 98 98805-3921</p>
              <p>Email: <a href="mailto:nave.sitevendas@gmail.com">nave.sitevendas@gmail.com</a></p>
              <p>Endereço: R. Nazareth, 8 - Centro, São Luís - MA, 65010-410</p>
            </address>
          </section>
        </div>

        <p className="footer-copy">
          © 2025 Rede NAVE — Natureza, Arte, Vida e Emancipação Feminina. Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;