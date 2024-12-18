import React from "react";
import styled from "styled-components";

// Container
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

// Shared styles for boxes
const Box = styled.div`
  border: 2px solid #333;
  color: white;
  font-size: 14px;
  text-align: center;
  margin: 10px;
  padding: 10px;
`;

// Block Box
const BlockBox = styled(Box)`
  display: block;
  background-color: #4CAF50;
  width: 100%;
`;

// Inline Box
const InlineBox = styled(Box)`
  display: inline;
  background-color: #2196F3;
  width: auto; /* Width ignored for inline elements */
`;

// Inline-Block Box
const InlineBlockBox = styled(Box)`
  display: inline-block;
  background-color: #FF9800;
  width: 150px;
`;

// Flex Container
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border: 2px dashed #aaa;
  padding: 10px;
  margin-top: 10px;
`;

const FlexBox = styled(Box)`
  background-color: #9C27B0;
  flex: 1; /* Flexible width */
`;

// Grid Container
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  border: 2px dashed #aaa;
  padding: 10px;
  margin-top: 10px;
`;

const GridBox = styled(Box)`
  background-color: #E91E63;
`;

// None Box (Hidden)
const NoneBox = styled(Box)`
  display: none;
`;

const DisplayPractice = () => {
  return (
    <Container>
      <h1>CSS Display Property Practice</h1>

      {/* Block */}
      <h2>Display: Block</h2>
      <BlockBox>Block Element 1</BlockBox>
      <BlockBox>Block Element 2</BlockBox>

      {/* Inline */}
      <h2>Display: Inline</h2>
      <InlineBox>Inline Element 1</InlineBox>
      <InlineBox>Inline Element 2</InlineBox>

      {/* Inline-Block */}
      <h2>Display: Inline-Block</h2>
      <InlineBlockBox>Inline-Block Element 1</InlineBlockBox>
      <InlineBlockBox>Inline-Block Element 2</InlineBlockBox>

      {/* Flex */}
      <h2>Display: Flex</h2>
      <FlexContainer>
        <FlexBox>Flex Item 1</FlexBox>
        <FlexBox>Flex Item 2</FlexBox>
        <FlexBox>Flex Item 3</FlexBox>
      </FlexContainer>

      {/* Grid */}
      <h2>Display: Grid</h2>
      <GridContainer>
        <GridBox>Grid Item 1</GridBox>
        <GridBox>Grid Item 2</GridBox>
        <GridBox>Grid Item 3</GridBox>
      </GridContainer>

      {/* None */}
      <h2>Display: None</h2>
      <NoneBox>This box is hidden (display: none)</NoneBox>
      <p>Note: The above "None Box" is hidden, so you won't see it.</p>
    </Container>
  );
};

export default DisplayPractice;
