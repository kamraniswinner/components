import React, { useState, useContext, createContext } from "react";
import styled from "styled-components";

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

// 1. Higher-Order Component (HOC)
const withCounter = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);
    return <WrappedComponent count={count} setCount={setCount} {...props} />;
  };
};

const CounterDisplay = ({ count, setCount }) => (
  <div>
    <Text>Count: {count}</Text>
    <Button onClick={() => setCount(count + 1)}>Increment</Button>
  </div>
);

const EnhancedCounter = withCounter(CounterDisplay);

// 2. Compound Components Pattern
const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { active: index === activeIndex, onToggle: () => handleToggle(index) })
      )}
    </div>
  );
};

const AccordionItem = ({ title, children, active, onToggle }) => (
  <div>
    <Button onClick={onToggle}>{title}</Button>
    {active && <div>{children}</div>}
  </div>
);

// 3. Render Props Pattern
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove} style={{ height: "200px", border: "1px solid #ccc" }}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// 4. Controlled vs Uncontrolled Components
const ControlledComponent = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <Text>Controlled Input Value: {value}</Text>
    </div>
  );
};

const UncontrolledComponent = () => {
  const inputRef = React.useRef();

  const handleSubmit = () => {
    alert(`Uncontrolled Input Value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

// 5. Reusable Component Design
const TextField = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input type="text" value={value} onChange={onChange} />
  </div>
);

const ReusableComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
  );
};

// 6. Context Provider Pattern
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <Text>Current Theme: {theme}</Text>
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</Button>
    </div>
  );
};

// 7. Slot Pattern with Props
const SlotComponent = ({ children }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
    <div>{children}</div>
  </div>
);

const SlotPattern = () => (
  <div>
    <SlotComponent>
      <Text>This is a slot content</Text>
    </SlotComponent>
    <SlotComponent>
      <Text>Another slot content</Text>
    </SlotComponent>
  </div>
);

// Main App Component
const Advancedreact = () => (
  <Container>
    <Title>Advanced React Patterns</Title>

    <Section>
      <h2>Higher-Order Components (HOCs)</h2>
      <EnhancedCounter />
    </Section>

    <Section>
      <h2>Compound Components Pattern</h2>
      <Accordion>
        <AccordionItem title="Item 1">
          <Text>Content of Item 1</Text>
        </AccordionItem>
        <AccordionItem title="Item 2">
          <Text>Content of Item 2</Text>
        </AccordionItem>
        <AccordionItem title="Item 3">
          <Text>Content of Item 3</Text>
        </AccordionItem>
      </Accordion>
    </Section>

    <Section>
      <h2>Render Props Pattern</h2>
      <MouseTracker render={(state) => <Text>Mouse Position: {state.x}, {state.y}</Text>} />
    </Section>

    <Section>
      <h2>Controlled vs Uncontrolled Components</h2>
      <ControlledComponent />
      <UncontrolledComponent />
    </Section>

    <Section>
      <h2>Reusable Component Design</h2>
      <ReusableComponent />
    </Section>

    <Section>
      <h2>Context Provider Pattern</h2>
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </Section>

    <Section>
      <h2>Slot Pattern with Props</h2>
      <SlotPattern />
    </Section>
  </Container>
);

export default Advancedreact;
