// src/components/Cart.js
import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  position: fixed;
  top: 100px;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
  animation: slideIn 0.5s forwards;

  @keyframes slideIn {
    to {
      transform: translateX(0);
    }
  }
`;

const Cart = () => {
  return (
    <CartContainer>
      <h2>Cartt</h2>
      {/* Add cart items here */}
    </CartContainer>
  );
};

export default Cart;
