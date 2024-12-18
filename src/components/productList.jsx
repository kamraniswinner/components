// src/components/ProductList.js
import React from 'react';
import styled from 'styled-components';
import ProductCard from './productCard.jsx';

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: left;
  padding: 2rem;
`;

const products = [
  {
    image: 'https://picsum.photos/250/200?random=1',
    name: 'Stylish Jacket',
    price: '59.99',
  },
  {
    image: 'https://picsum.photos/250/200?random=2',
    name: 'Running Shoes',
    price: '89.99',
  },
  {
    image: 'https://picsum.photos/250/200?random=3',
    name: 'Classic Watch',
    price: '120.00',
  },
  {
    image: 'https://picsum.photos/250/200?random=4',
    name: 'Sunglasses',
    price: '45.00',
  },
  {
    image: 'https://picsum.photos/250/200?random=5',
    name: 'Backpack',
    price: '70.00',
  },
];

const ProductList = () => {
  return (
    <ProductListContainer>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
