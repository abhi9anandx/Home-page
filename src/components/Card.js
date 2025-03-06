import React from 'react';
import '../styles/Card.css';

const Cards = () => {
  const cardData = [
    {
      icon: '🌟',
      title: 'Creative Solutions',
      description: 'We offer innovative and creative solutions tailored to your needs.',
      link: '#',
    },
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Get your projects delivered quickly without compromising on quality.',
      link: '#',
    },
    {
      icon: '💡',
      title: 'Expert Team',
      description: 'Our team of experts is dedicated to providing the best services.',
      link: '#',
    },
  ];

  return (
    <section className="cards">
      <h2>Why Choose Us?</h2>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.link} className="card-button">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;