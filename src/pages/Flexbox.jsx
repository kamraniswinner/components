// FlexboxPage.jsx
import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  height: ${({ height }) => height || "auto"};
  border: 2px solid #ccc;
  padding: 10px;
`;

const FlexItem = styled.div`
  flex: ${({ flex }) => flex || "0 1 auto"};
  align-self: ${({ alignSelf }) => alignSelf || "auto"};
  width: ${({ width }) => width || "100px"};
  height: 50px;
  background-color: ${({ bg }) => bg || "#007bff"};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const Flexbox = () => {
  return (
    <Container>
      <h1>Learn Flexbox with Styled Components</h1>

      {/* Flex Container: Justify Content */}
      <Section>
        <Title>1. Justify Content</Title>
        <p>Exploring all values of justify-content:</p>
        <FlexContainer justify="flex-start">
          <FlexItem>Start</FlexItem>
          <FlexItem>Start</FlexItem>
        </FlexContainer>
        <FlexContainer justify="flex-end">
          <FlexItem>End</FlexItem>
          <FlexItem>End</FlexItem>
        </FlexContainer>
        <FlexContainer justify="center">
          <FlexItem>Center</FlexItem>
          <FlexItem>Center</FlexItem>
        </FlexContainer>
        <FlexContainer justify="space-between">
          <FlexItem>Between</FlexItem>
          <FlexItem>Between</FlexItem>
        </FlexContainer>
        <FlexContainer justify="space-around">
          <FlexItem>Around</FlexItem>
          <FlexItem>Around</FlexItem>
        </FlexContainer>
        <FlexContainer justify="space-evenly">
          <FlexItem>Evenly</FlexItem>
          <FlexItem>Evenly</FlexItem>
        </FlexContainer>
      </Section>

      {/* Flex Container: Align Items */}
      <Section>
        <Title>2. Align Items</Title>
        <p>Exploring all values of align-items:</p>
        <FlexContainer align="flex-start" height="150px">
          <FlexItem>Start</FlexItem>
          <FlexItem>Start</FlexItem>
        </FlexContainer>
        <FlexContainer align="flex-end" height="150px">
          <FlexItem>End</FlexItem>
          <FlexItem>End</FlexItem>
        </FlexContainer>
        <FlexContainer align="center" height="150px">
          <FlexItem>Center</FlexItem>
          <FlexItem>Center</FlexItem>
        </FlexContainer>
        <FlexContainer align="stretch" height="150px">
          <FlexItem>Stretch</FlexItem>
          <FlexItem>Stretch</FlexItem>
        </FlexContainer>
        <FlexContainer align="baseline" height="150px">
          <FlexItem>Baseline</FlexItem>
          <FlexItem>Baseline</FlexItem>
        </FlexContainer>
      </Section>

      {/* Flex Container: Flex Wrap */}
      <Section>
        <Title>3. Flex Wrap</Title>
        <p>Exploring all values of flex-wrap:</p>
        <FlexContainer wrap="nowrap">
          <FlexItem>Nowrap</FlexItem>
          <FlexItem>Nowrap</FlexItem>
          <FlexItem>Nowrap</FlexItem>
          <FlexItem>Nowrap</FlexItem>
        </FlexContainer>
        <FlexContainer wrap="wrap">
          <FlexItem>Wrap</FlexItem>
          <FlexItem>Wrap</FlexItem>
          <FlexItem>Wrap</FlexItem>
          <FlexItem>Wrap</FlexItem>
        </FlexContainer>
        <FlexContainer wrap="wrap-reverse">
          <FlexItem>Reverse</FlexItem>
          <FlexItem>Reverse</FlexItem>
          <FlexItem>Reverse</FlexItem>
          <FlexItem>Reverse</FlexItem>
        </FlexContainer>
      </Section>

      {/* Flex Items: Flex Grow */}
      <Section>
        <Title>4. Flex Grow</Title>
        <p>Demonstrating flex-grow property:</p>
        <FlexContainer>
          <FlexItem flex="1" bg="orange">Grow 1</FlexItem>
          <FlexItem flex="2" bg="blue">Grow 2</FlexItem>
          <FlexItem flex="1" bg="pink">Grow 1</FlexItem>
        </FlexContainer>
      </Section>

      {/* Flex Items: Align Self */}
      <Section>
        <Title>5. Align Self</Title>
        <p>Demonstrating align-self property:</p>
        <FlexContainer height="150px">
          <FlexItem alignSelf="flex-start" bg="cyan">Top</FlexItem>
          <FlexItem alignSelf="center" bg="lime">Center</FlexItem>
          <FlexItem alignSelf="flex-end" bg="coral">Bottom</FlexItem>
          <FlexItem alignSelf="stretch" bg="purple">Stretch</FlexItem>
        </FlexContainer>
      </Section>
    </Container>
  );
};

export default Flexbox;
