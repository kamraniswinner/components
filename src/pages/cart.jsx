import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const Cart = () => {
  return (
    <CartContainer>
      <Title>Your Cart</Title>
      <Message>Your cart is currently empty.</Message>
    </CartContainer>
  );
};

export default Cart;
