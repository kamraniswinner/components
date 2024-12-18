// src/components/ProductCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0.2, 0.2, 0.2, 0.2);
  overflow: hidden;
  width: 23%;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-0.25px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.01);
  }
`;

const ProductInfo = styled.div`
  padding: 1rem;
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #f0a500;
`;

const ProductCard = ({ image, name, price }) => {
  return (
    <Card>
      <ProductImage src={image} alt={name} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard;
