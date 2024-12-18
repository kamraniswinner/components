import React from "react";
import styled from "styled-components";

// Styled components for various pseudo-classes and pseudo-elements
const Container = styled.div`
  margin: 20px;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  
  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: 3px solid #ffa500;
  }

  &:active {
    background-color: #2d8f2b;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }

  &:enabled {
    cursor: pointer;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;

  &:nth-child(even) {
    background-color: #e0e0e0;
  }

  &:nth-child(3) {
    font-weight: bold;
    background-color: #c8e6c9;
  }

  &:first-child {
    color: #ff5722;
  }

  &:last-child {
    color: #2196f3;
  }

  &:not(:first-child) {
    font-style: italic;
  }

  &:empty {
    display: none;
  }

  &::before {
    content: "👉 ";
    font-size: 20px;
  }

  &::after {
    content: " ✔";
    color: green;
  }

  & > span::first-letter {
    color: red;
    font-size: 20px;
  }

  & > span::first-line {
    font-weight: bold;
  }
`;

const Checkbox = styled.input`
  margin: 10px;
  accent-color: #4caf50;
`;

const SelectionArea = styled.div`
  padding: 10px;
  background-color: #ffeb3b;
  margin: 20px 0;
  color: black;

  ::selection {
    background-color: #2196f3;
    color: white;
  }
`;

const Pseudo = () => {
  return (
    <Container>
      <h1>Learning Pseudo-Classes & Pseudo-Elements</h1>

      {/* Hover, Focus, Active */}
      <Button>Hover, Focus, Active</Button>
      <Button disabled>Disabled Button</Button>

      {/* nth-child, nth-of-type, first-child, last-child, not() */}
      <List>
        <ListItem>
          <span>First Item</span>
        </ListItem>
        <ListItem>
          <span>Second Item</span>
        </ListItem>
        <ListItem>
          <span>Third Item</span>
        </ListItem>
        <ListItem>
          <span>Fourth Item</span>
        </ListItem>
      </List>

      {/* Empty, Checked, Disabled */}
      <div>
        <Checkbox type="checkbox" id="check1" />
        <label htmlFor="check1">Checkbox 1</label>
      </div>

      {/* Selection */}
      <SelectionArea>
        Try selecting this text to see the selection pseudo-element in action.
      </SelectionArea>

      {/* Using :first-letter and :first-line */}
      <p>
        <span>
          This is an example of <strong>first-letter</strong> and{" "}
          <strong>first-line</strong> pseudo-elements.
        </span>
      </p>
    </Container>
  );
};

export default Pseudo;
