import React from 'react';
import './TrilhasSection.css';

const trilhasData = [
  {
    id: 1,
    icone: 'fas fa-graduation-cap',
    titulo: 'Gestão Financeira',
    descricao: 'Desenvolva habilidades para planejar orçamentos, controlar custos e otimizar a saúde financeira de negócios. Tome decisões informadas e mitigue riscos.',
  },
  {
    id: 2,
    icone: 'fas fa-graduation-cap',
    titulo: 'Liderança Comunitária',
    descricao: 'Capacite-se para inspirar, mobilizar e guiar projetos comunitários. Foco em autoconhecimento, comunicação e gestão de conflitos sociais.',
  },
  {
    id: 3,
    icone: 'fas fa-graduation-cap',
    titulo: 'Planejamento e Desenvolvimento de Negócios',
    descricao: 'Guia para iniciar, expandir e inovar um empreendimento. Aprenda a elaborar planos de negócios robustos e garantir o crescimento sustentável.',
  },
  {
    id: 4,
    icone: 'fas fa-graduation-cap',
    titulo: 'Vendas e Estratégias Comerciais',
    descricao: 'Domine técnicas para aumentar a performance de vendas e lucratividade. Explore prospecção, negociação e estratégias comerciais de alto impacto.',
  },
];

const TrilhasSection: React.FC = () => {
  return (
    <section className="trilhas-section">
      <div className="card-grid">
        {trilhasData.map((trilha) => (
          <div className="trilha-card" key={trilha.id}>
            <div className="card-icon"><i className={trilha.icone}></i></div>
            <h3>{trilha.titulo}</h3>
            <p className="descricao">{trilha.descricao}</p>
            <button className="btn-carrinho">Ver Detalhes</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrilhasSection;