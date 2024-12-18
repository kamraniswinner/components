import React from 'react';
import styled from 'styled-components';

// Styled components for each div with different position types

const Container = styled.div`
  font-family: Arial, sans-serif;
  height: 2000px; /* Making the body tall enough to show scrolling behavior */
  padding: 20px;
`;

const Box = styled.div`
  width: 200px;
  height: 100px;
  margin: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const StaticBox = styled(Box)`
  background-color: blue;
  position: static;
`;

const RelativeBox = styled(Box)`
  background-color: green;
  position: relative;
  top: 50px; /* Move 50px down */
  left: 30px; /* Move 30px to the right */
`;

const AbsoluteBox = styled(Box)`
  background-color: red;
  position: absolute;
  top: 200px; /* Positioned 200px from the top of the nearest positioned ancestor */
  left: 50px; /* Positioned 50px from the left edge of the nearest positioned ancestor */
`;

const FixedBox = styled(Box)`
  background-color: purple;
  position: fixed;
  top: 10px; /* Always 10px from the top of the viewport */
  right: 10px; /* Always 10px from the right edge of the viewport */
`;

const StickyBox = styled(Box)`
  background-color: orange;
  position: sticky;
  top: 100px; /* Sticky position 100px from the top */
`;

const Positioning = () => {
  return (
    <Container>
      <h1>CSS Positioning with Styled Components</h1>
      
      <StaticBox>Static Position</StaticBox>
      <RelativeBox>Relative Position</RelativeBox>
      <AbsoluteBox>Absolute Position</AbsoluteBox>
      <FixedBox>Fixed Position</FixedBox>
      <StickyBox>Sticky Position</StickyBox>
      
      <p>Scroll down to see how the fixed and sticky boxes behave.</p>
    </Container>
  );
}

export default Positioning;
