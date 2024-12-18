// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  padding:20px;
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.6s ease, transform 0.6s ease;

  &:hover {
    color: #f0a500;
    transform: scale(1.1);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1 style={{ color: 'white', paddingLeft:'20px' }}>E-Shop</h1>
      <Nav>
        <NavLink href="#">Homee</NavLink>
        <NavLink href="#">Shop</NavLink>
        <NavLink href="#">Cart</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
