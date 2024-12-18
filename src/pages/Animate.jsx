import React from "react";
import styled, { keyframes } from "styled-components";

// Styled components for transitions and animations

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

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

// Styled components
const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #4caf50;
  margin: 20px;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
    background-color: #45a049;
  }

  &:active {
    background-color: #388e3c;
  }
`;

const AnimatedBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ff5722;
  margin: 20px;
  animation: ${bounce} 1s ease infinite;
`;

const RotatingBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #2196f3;
  margin: 20px;
  animation: ${rotate} 2s linear infinite;
`;

const FadeInBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: #9c27b0;
   &:hover {
    animation: ${fadeIn} 2s ease-in-out;
    animation-delay: 0.5s;
  }
`;

const SlideInBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ff9800;
  margin: 20px;
  animation: ${slideIn} 1s ease-in-out;
`;

const ChainAnimations = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px;
  background-color: #673ab7;
  animation: ${fadeIn} 1s ease, ${bounce} 0.5s ease-in-out 1s infinite;
`;

const ContainerForTransitions = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWithTransition = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease-in-out;

  &:hover {
    background-color: #2c387e;
    transform: scale(1.1);
  }

  &:active {
    background-color: #1a237e;
  }
`;

const Animate = () => {
  return (
    <Container>
      <h1>Learning Transitions and Animations</h1>

      {/* Simple Transition on Hover and Active */}
      <Box>Hover Me!</Box>

      {/* Animation Example - Bounce */}
      <AnimatedBox>Bounce</AnimatedBox>

      {/* Animation Example - Rotate */}
      <RotatingBox>Rotate</RotatingBox>

      {/* Animation Example - Fade In */}
      <FadeInBox>Fade In</FadeInBox>

      {/* Slide In Animation */}
      <SlideInBox>Slide In</SlideInBox>

      {/* Chaining Animations */}
      <ChainAnimations>Chain</ChainAnimations>

      <ContainerForTransitions>
        <h3>Button with Transition Effects</h3>
        <ButtonWithTransition>Hover & Active</ButtonWithTransition>
      </ContainerForTransitions>
    </Container>
  );
};

export default Animate;
