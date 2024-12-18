import React, { useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useLayoutEffect } from "react";
import styled from "styled-components";

// Styled-components
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

const CounterText = styled.h2`
  text-align: center;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Context = React.createContext();

// useState Example
function StateExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
    </div>
  );
}

// useEffect Example
function EffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Click Me</Button>
    </div>
  );
}

// useContext Example
function ContextExample() {
  const count = useContext(Context);
  return <Text>Global Count Value: {count}</Text>;
}

// useReducer Example
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <Button onClick={() => dispatch({ type: 'increment' })}>Increment</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>Decrement</Button>
      <Text>Count: {state.count}</Text>
    </div>
  );
}

// useCallback Example
function CallbackExample() {
  const [count, setCount] = useState(0);

  const memoizedCallback = useCallback(() => {
    console.log("Callback executed!");
  }, []);

  return (
    <div>
      <Button onClick={() => { setCount(count + 1); memoizedCallback(); }}>Increase Count</Button>
      <Text>Count: {count}</Text>
    </div>
  );
}

// useMemo Example
function MemoExample() {
  const [count, setCount] = useState(0);

  const expensiveComputation = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Increase Count</Button>
      <Text>Expensive Computation Result: {expensiveComputation}</Text>
    </div>
  );
}

// useRef Example
function RefExample() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <Input ref={inputRef} placeholder="Click button to focus" />
      <Button onClick={focusInput}>Focus Input</Button>
    </div>
  );
}

// useLayoutEffect Example
function LayoutEffectExample() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log("Layout effect runs after DOM update");
  }, [count]);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Increase Count</Button>
      <Text>Count: {count}</Text>
    </div>
  );
}

// Custom Hook Example
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

function CustomHookExample() {
  const [name, setName] = useLocalStorage("name", "John Doe");

  return (
    <div>
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      <Text>Stored Name: {name}</Text>
    </div>
  );
}

// Main App Component
function Reacthooks() {
  return (
    <Container>
      <Title>React Hooks Demo</Title>

      <StateExample />
      <EffectExample />
      <Context.Provider value={42}>
        <ContextExample />
      </Context.Provider>
      <ReducerExample />
      <CallbackExample />
      <MemoExample />
      <RefExample />
      <LayoutEffectExample />
      <CustomHookExample />
    </Container>
  );
}

export default Reacthooks;
