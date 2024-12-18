import React, { useState, useMemo, useCallback, Suspense } from 'react';
import styled from 'styled-components';

// Styled-components for layout
const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
`;

const Button = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Text = styled.p`
  font-size: 16px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

// 1. React Strict Mode
const StrictModeExample = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  return (
    <div>
      <Text>Strict Mode Counter: {counter}</Text>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

// 2. Preventing Re-Renders with React.memo
const ExpensiveComponent = React.memo(({ count }) => {
  console.log("Expensive Component Rendered");
  return <Text>Count: {count}</Text>;
});

// 3. Lazy Loading Components with React.lazy and Suspense
const LazyComponent = React.lazy(() => import('../components/LazyComponent.jsx'));

// 4. Dynamic Imports (using React.lazy)
const DynamicImportComponent = React.lazy(() => import('../components/DynamicComponent.jsx'));

// 5. Optimizing State with Derived State
const DerivedStateComponent = () => {
  const [inputValue, setInputValue] = useState('');

  // Derived state optimization
  const upperCaseValue = useMemo(() => inputValue.toUpperCase(), [inputValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something"
      />
      <Text>Uppercase: {upperCaseValue}</Text>
    </div>
  );
};

// 6. Understanding Key Prop Importance
const ListItem = React.memo(({ item }) => {
  console.log(`Rendering item: ${item}`);
  return <Text>{item}</Text>;
});

const List = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <ListItem key={item} item={item} />
      ))}
    </div>
  );
};

// Main App Component
const ReactPerformanceOptimization = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <Container>
      <Title>React Performance Optimization</Title>

      <Section>
        <h2>1. React Strict Mode</h2>
        <React.StrictMode>
          <StrictModeExample />
        </React.StrictMode>
      </Section>

      <Section>
        <h2>2. Preventing Re-Renders with React.memo</h2>
        <ExpensiveComponent count={counter} />
        <Button onClick={increment}>Increment</Button>
      </Section>

      <Section>
        <h2>3. Lazy Loading Components with React.lazy and Suspense</h2>
        <Suspense fallback={<Text>Loading Lazy Component...</Text>}>
          <LazyComponent />
        </Suspense>
      </Section>

      <Section>
        <h2>4. Dynamic Imports (using React.lazy)</h2>
        <Suspense fallback={<Text>Loading Dynamic Component...</Text>}>
          <DynamicImportComponent />
        </Suspense>
      </Section>

      <Section>
        <h2>5. Optimizing State with Derived State</h2>
        <DerivedStateComponent />
      </Section>

      <Section>
        <h2>6. Understanding Key Prop Importance</h2>
        <List items={items} />
      </Section>
    </Container>
  );
};

export default ReactPerformanceOptimization;
