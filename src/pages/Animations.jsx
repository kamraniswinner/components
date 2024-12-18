import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframe Animations
const bounce = keyframes`0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); }`;
const fadeIn = keyframes`0% { opacity: 0; } 100% { opacity: 1; }`;
const fadeOut = keyframes`0% { opacity: 1; } 100% { opacity: 0; }`;
const slideIn = keyframes`0% { transform: translateX(-100%); } 100% { transform: translateX(0); }`;
const slideOut = keyframes`0% { transform: translateX(0); } 100% { transform: translateX(100%); }`;
const scaleUp = keyframes`0% { transform: scale(0.5); } 100% { transform: scale(1); }`;
const scaleDown = keyframes`0% { transform: scale(1); } 100% { transform: scale(0.5); }`;
const rotate = keyframes`0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }`;
const pulse = keyframes`0% { transform: scale(1); } 50% { transform: scale(1.2); } 100% { transform: scale(1); }`;
const shake = keyframes`0%, 100% { transform: translateX(0); } 25%, 75% { transform: translateX(-10px); } 50% { transform: translateX(10px); }`;
const flip = keyframes`0% { transform: rotateY(0); } 100% { transform: rotateY(180deg); }`;
const heartbeat = keyframes`0% { transform: scale(1); } 50% { transform: scale(1.3); } 100% { transform: scale(1); }`;
const wiggle = keyframes`0%, 100% { transform: rotate(0); } 25% { transform: rotate(-5deg); } 75% { transform: rotate(5deg); }`;
const swing = keyframes`0%, 100% { transform: rotate(0); } 25% { transform: rotate(15deg); } 75% { transform: rotate(-15deg); }`;
const rollIn = keyframes`0% { transform: translateX(-100%) rotate(-120deg); } 100% { transform: translateX(0) rotate(0); }`;
const rollOut = keyframes`0% { transform: translateX(0) rotate(0); } 100% { transform: translateX(100%) rotate(120deg); }`;
const zoomIn = keyframes`0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; }`;
const zoomOut = keyframes`0% { transform: scale(1); opacity: 1; } 100% { transform: scale(0.5); opacity: 0; }`;
const blurIn = keyframes`0% { filter: blur(10px); opacity: 0; } 100% { filter: blur(0); opacity: 1; }`;
const blurOut = keyframes`0% { filter: blur(0); opacity: 1; } 100% { filter: blur(10px); opacity: 0; }`;
const popIn = keyframes`0% { transform: scale(0); } 80% { transform: scale(1.2); } 100% { transform: scale(1); }`;
const growShrink = keyframes`0%, 100% { transform: scale(1); } 50% { transform: scale(1.5); }`;
const stretch = keyframes`0% { transform: scaleY(1); } 50% { transform: scaleY(1.5); } 100% { transform: scaleY(1); }`;
const skew = keyframes`0% { transform: skew(0deg); } 50% { transform: skew(20deg); } 100% { transform: skew(0deg); }`;
const wave = keyframes`0% { transform: rotate(0deg); } 25% { transform: rotate(5deg); } 75% { transform: rotate(-5deg); } 100% { transform: rotate(0deg); }`;
const shadowPulse = keyframes`0%, 100% { box-shadow: 0 0 5px #4caf50; } 50% { box-shadow: 0 0 20px #4caf50; }`;
const rainbow = keyframes`0% { background-color: red; } 25% { background-color: yellow; } 50% { background-color: green; } 75% { background-color: blue; } 100% { background-color: red; }`;

// Styled Container and Box
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: #f4f4f4;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AnimationBox = styled.div`
  margin:50px;
  left:30%;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  text-align: center;
`;

// Animation Variants
const animations = [
  { name: "Bounce", keyframe: bounce },
  { name: "Fade In", keyframe: fadeIn },
  { name: "Fade Out", keyframe: fadeOut },
  { name: "Slide In", keyframe: slideIn },
  { name: "Slide Out", keyframe: slideOut },
  { name: "Scale Up", keyframe: scaleUp },
  { name: "Scale Down", keyframe: scaleDown },
  { name: "Rotate", keyframe: rotate },
  { name: "Pulse", keyframe: pulse },
  { name: "Shake", keyframe: shake },
  { name: "Flip", keyframe: flip },
  { name: "Heartbeat", keyframe: heartbeat },
  { name: "Wiggle", keyframe: wiggle },
  { name: "Swing", keyframe: swing },
  { name: "Roll In", keyframe: rollIn },
  { name: "Roll Out", keyframe: rollOut },
  { name: "Zoom In", keyframe: zoomIn },
  { name: "Zoom Out", keyframe: zoomOut },
  { name: "Blur In", keyframe: blurIn },
  { name: "Blur Out", keyframe: blurOut },
  { name: "Pop In", keyframe: popIn },
  { name: "Grow Shrink", keyframe: growShrink },
  { name: "Stretch", keyframe: stretch },
  { name: "Skew", keyframe: skew },
  { name: "Wave", keyframe: wave },
  { name: "Shadow Pulse", keyframe: shadowPulse },
  { name: "Rainbow", keyframe: rainbow },
];

// Styled Component for Each Animation Box
const getAnimationBox = (keyframe) => styled(AnimationBox)`
  animation: ${keyframe} 2s infinite ease-in-out;
  background-color: #4caf50;
`;

const Animations = () => {
  return (
    <>
      <Title>30 CSS Animations with @keyframes</Title>
      <Container>
        {animations.map((anim, index) => {
          const AnimatedBox = getAnimationBox(anim.keyframe);
          return <AnimatedBox key={index}>{anim.name}</AnimatedBox>;
        })}
      </Container>
    </>
  );
};

export default Animations;
