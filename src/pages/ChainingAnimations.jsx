import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframe animations
const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`;

// Styled components for multiple chained animations
const Container = styled.div`
  margin: 20px;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Box = styled.div`
  width: 150px;
  height: 150px;
  background-color: #4caf50;
  margin: 20px;
  

  &:hover {
    background-color:rgb(109, 165, 112);
    animation: ${bounce} 1s ease, ${rotate} 2s linear 1s, ${fadeIn} 2s ease-in-out 3s, ${scaleUp} 1s ease-in-out 5s;
  }

  /* Using multiple chained animations with delays */
  &:active {
    background-color: #388e3c;
  }
`;

const ChainingAnimations = () => {
  return (
    <Container>
      <h1>Chaining Multiple Animations in React</h1>

      <p>
        This box demonstrates how you can chain multiple animations together, with different
        durations and delays.
      </p>

      <Box>Chained Animations</Box>
    </Container>
  );
};

export default ChainingAnimations;
