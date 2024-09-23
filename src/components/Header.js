import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const StyledImage = styled.img`
  height: 800px;
  width: 100%; 
  object-fit: cover; 
`;

const Header = () => {
  return (
    <header>
      <Carousel>
        <Carousel.Item>
          <StyledImage
            src={require('../Images/Imagem_Principal.png')}
            alt="Primeira imagem"
          />
          <Carousel.Caption>
            <h3>Imagem 1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <StyledImage
            src={require('../Images/beach-tennis.jpeg')}
            alt="Segunda imagem"
          />
          <Carousel.Caption>
            <h3>Imagem 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="text-center">
        <h1>Bem-vindo ao Campeonato de Beach Tennis</h1>
        <p>Acompanhe o ranking e as estatísticas dos jogadores!</p>
      </div>
    </header>
  );
};

export default Header;
