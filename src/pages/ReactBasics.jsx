import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components
const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f0f0f0;
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px 0;
`;

// React Basics Example
function ReactBasics() {
  const [count, setCount] = useState(0); // State Management with useState
  const [showList, setShowList] = useState(false); // Conditional Rendering

  const items = ['React', 'Styled-Components', 'JavaScript']; // Data for rendering lists

  const handleButtonClick = () => {
    setCount(count + 1); // Handling Events
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <PageContainer>
      <Section>
        <Title>React Basics</Title>
        <p>This is a practice page to learn React basics with styled-components.</p>
      </Section>

      <Section>
        <Title>Functional Components and JSX Syntax</Title>
        <p>This section demonstrates how to use JSX and functional components in React.</p>
      </Section>

      <Section>
        <Title>Props and Component Communication</Title>
        <Greeting name="John" />
      </Section>

      <Section>
        <Title>State Management with useState</Title>
        <p>Current count: {count}</p>
        <Button onClick={handleButtonClick}>Increase Count</Button>
      </Section>

      <Section>
        <Title>Conditional Rendering</Title>
        <Button onClick={toggleList}>{showList ? 'Hide' : 'Show'} List</Button>
        {showList && (
          <List>
            {items.map((item, index) => (
              <ListItem key={index}>{item}</ListItem> // Rendering Lists with map
            ))}
          </List>
        )}
      </Section>

      <Section>
        <Title>Fragments</Title>
        <FragmentExample />
      </Section>
    </PageContainer>
  );
}

// Child Component for Props Example
function Greeting({ name }) {
  return <p>Hello, {name}! Welcome to learning React.</p>;
}

// Fragment Example
function FragmentExample() {
  return (
    <>
      <p>This is a demonstration of using fragments.</p>
      <p>Fragments help to group multiple elements without adding extra DOM nodes.</p>
    </>
  );
}

export default ReactBasics;
