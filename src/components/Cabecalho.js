import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  background-color: black;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    Background-color: black;
  }
  li {
    margin-right: 1rem;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

const Cabecalho = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/championships">Campeonatos</Link>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

export default Cabecalho;
