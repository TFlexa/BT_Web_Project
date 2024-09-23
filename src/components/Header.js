import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin-right: 1rem;
  }
  a {
    text-decoration: none;
    color: blue;
  }
`;

const Header = () => {
  return (
    <header>
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
    </header>
  );
};

export default Header;
