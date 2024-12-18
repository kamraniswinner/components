// GridLayoutPage.jsx
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || "1fr"};
  grid-template-rows: ${({ rows }) => rows || "auto"};
  grid-gap: ${({ gap }) => gap || "0"};
  grid-template-areas: ${({ areas }) => areas || "none"};
  height: ${({ height }) => height || "auto"};
  border: 2px solid #ccc;
  padding: 10px;
`;

const GridItem = styled.div`
  background-color: ${({ bg }) => bg || "#007bff"};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  grid-area: ${({ area }) => area || "auto"};
`;

const Grid = () => {
  return (
    <Container>
      <h1>Learn Grid Layout with Styled Components</h1>

      {/* Grid Container: Grid Template Columns */}
      <Section>
        <Title>1. Grid Template Columns</Title>
        <GridContainer columns="1fr 2fr 1fr">
          <GridItem bg="blue">1</GridItem>
          <GridItem bg="green">2</GridItem>
          <GridItem bg="red">3</GridItem>
        </GridContainer>
      </Section>

      {/* Grid Container: Grid Template Rows */}
      <Section>
        <Title>2. Grid Template Rows</Title>
        <GridContainer rows="100px 50px auto">
          <GridItem bg="purple">1</GridItem>
          <GridItem bg="orange">2</GridItem>
          <GridItem bg="cyan">3</GridItem>
        </GridContainer>
      </Section>

      {/* Grid Container: Grid Gap */}
      <Section>
        <Title>3. Grid Gap</Title>
        <GridContainer columns="repeat(3, 1fr)" gap="20px">
          <GridItem bg="pink">1</GridItem>
          <GridItem bg="lime">2</GridItem>
          <GridItem bg="teal">3</GridItem>
          <GridItem bg="salmon">4</GridItem>
        </GridContainer>
      </Section>

      {/* Grid Container: Grid Areas */}
      <Section>
        <Title>4. Grid Areas</Title>
        <GridContainer
          columns="150px 150px 150px"
          rows="100px 100px"
          areas="
            'header header header'
            'sidebar main main'
          "
        >
          <GridItem bg="navy" area="header">Header</GridItem>
          <GridItem bg="olive" area="sidebar">Sidebar</GridItem>
          <GridItem bg="maroon" area="main">Main</GridItem>
        </GridContainer>
      </Section>

      {/* Grid Items: Spanning Columns and Rows */}
      <Section>
        <Title>5. Spanning Columns and Rows</Title>
        <GridContainer columns="repeat(3, 1fr)" rows="repeat(3, 100px)">
          <GridItem bg="gold" style={{ gridColumn: "1 / span 2", gridRow: "1 / span 2" }}>
            Span 2x2
          </GridItem>
          <GridItem bg="crimson">2</GridItem>
          <GridItem bg="darkgreen">3</GridItem>
          <GridItem bg="darkorange">4</GridItem>
          <GridItem bg="darkblue">5</GridItem>
        </GridContainer>
      </Section>
    </Container>
  );
};

export default Grid;
