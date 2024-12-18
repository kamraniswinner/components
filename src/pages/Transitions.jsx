import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const BoxContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

// Common box styles
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f0a500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

// 1. Color Transition
const ColorBox = styled(Box)`
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #4caf50;
  }
`;

// 2. Size Transition
const SizeBox = styled(Box)`
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

// 3. Position Transition
const PositionBox = styled(Box)`
  position: relative;
  transition: transform 0.5s ease;

  &:hover {
    transform: translateX(20px) translateY(-20px);
  }
`;

// 4. Opacity Transition
const OpacityBox = styled(Box)`
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.5;
  }
`;

// 5. Rotation Transition
const RotateBox = styled(Box)`
  transition: transform 0.5s ease;

  &:hover {
    transform: rotate(45deg);
  }
`;

// 6. Border Radius Transition
const BorderRadiusBox = styled(Box)`
  transition: border-radius 0.5s ease;

  &:hover {
    border-radius: 50%;
  }
`;

// 7. Shadow Transition
const ShadowBox = styled(Box)`
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

// 8. Border Color Transition
const BorderColorBox = styled(Box)`
  border: 3px solid #f0a500;
  transition: border-color 0.5s ease;

  &:hover {
    border-color: #4caf50;
  }
`;

// 9. Skew Effect
const SkewBox = styled(Box)`
  transition: transform 0.5s ease;

  &:hover {
    transform: skewX(-15deg) skewY(10deg);
  }
`;

// 10. Background Gradient Transition
const GradientBox = styled(Box)`
  background: linear-gradient(45deg, #f0a500, #ff6347);
  transition: background 0.5s ease;

  &:hover {
    background: linear-gradient(45deg, #4caf50, #2196f3);
  }
`;

// 11. Text Color Transition
const TextColorBox = styled(Box)`
  transition: color 0.5s ease;

  &:hover {
    color: #4caf50;
  }
`;

// 12. Blur Effect
const BlurBox = styled(Box)`
  transition: filter 0.5s ease;

  &:hover {
    filter: blur(4px);
  }
`;

// 13. Multiple Combined Transitions
const CombinedBox = styled(Box)`
  transition: transform 0.5s ease, background-color 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: scale(1.2) rotate(10deg);
    background-color: #4caf50;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

// 14. Height/Width Transition
const SizeTransitionBox = styled(Box)`
  transition: width 0.5s ease, height 0.5s ease;

  &:hover {
    width: 150px;
    height: 150px;
  }
`;

// 15. Perspective 3D Rotation
const PerspectiveBox = styled(Box)`
  transform-style: preserve-3d;
  transition: transform 0.5s ease;

  &:hover {
    transform: rotateY(45deg) rotateX(20deg);
  }
`;

// 16. Flip Effect (Card Flip)
const FlipContainer = styled.div`
  perspective: 1000px;
`;

const FlipBox = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const Front = styled(Box)`
  position: absolute;
  backface-visibility: hidden;
  background-color: #f0a500;
`;

const Back = styled(Box)`
  position: absolute;
  backface-visibility: hidden;
  background-color: #4caf50;
  transform: rotateY(180deg);
`;

// 17. Text Shadow Animation
const TextShadowBox = styled(Box)`
  transition: text-shadow 0.5s ease;

  &:hover {
    text-shadow: 0 0 10px #f0a500, 0 0 20px #ff6347;
  }
`;

// 18. Border Thickness Transition
const BorderThicknessBox = styled(Box)`
  border: 2px solid #333;
  transition: border-width 0.5s ease;

  &:hover {
    border-width: 8px;
  }
`;

// 19. Filter Grayscale Effect
const FilterBox = styled(Box)`
  filter: grayscale(0);
  transition: filter 0.5s ease;

  &:hover {
    filter: grayscale(100%);
  }
`;

// 20. Clip-Path Reveal
const ClipPathBox = styled(Box)`
  transition: clip-path 0.5s ease;
  clip-path: circle(20% at 50% 50%);

  &:hover {
    clip-path: circle(100% at 50% 50%);
  }
`;

// 21. Z-Index Transition
const ZIndexBox = styled(Box)`
  transition: transform 0.5s ease, z-index 0.5s ease;

  &:hover {
    transform: translateY(-10px);
    z-index: 10;
  }
`;

// 22. Transform Origin Transition
const TransformOriginBox = styled(Box)`
  transform-origin: top left;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

// 23. Cursor Change Effect
const CursorBox = styled(Box)`
  cursor: crosshair;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #4caf50;
    cursor: pointer;
  }
`;

// 24. Image Zoom with Overflow
const ImageZoomBox = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.3);
  }
`;

//25
const LetterSpacingBox = styled(Box)`
  letter-spacing: 1px;
  transition: letter-spacing 0.5s ease;

  &:hover {
    letter-spacing: 5px;
  }
`;


//26
const WordSpacingBox = styled(Box)`
  word-spacing: 2px;
  transition: word-spacing 0.5s ease;

  &:hover {
    word-spacing: 10px;
  }
`;

//27
const PaddingBox = styled(Box)`
  padding: 10px;
  transition: padding 0.5s ease;

  &:hover {
    padding: 30px;
  }
`;


//28
const ColorTransitionBox = styled(Box)`
  background-color: #333;
  color: #fff;
  transition: background-color 0.5s ease, color 0.5s ease;

  &:hover {
    background-color: #f0a500;
    color: #000;
  }
`;



const Transitions = () => {
  return (
    <PageContainer>
      <Title>Learn CSS Transitions</Title>
      <BoxContainer>
      <ColorBox>Color</ColorBox>
      <SizeBox>Size</SizeBox>
      <PositionBox>Position</PositionBox>
      <OpacityBox>Opacity</OpacityBox>
      <RotateBox>Rotate</RotateBox>
      <BorderRadiusBox>Border Radius</BorderRadiusBox>
      <ShadowBox>Shadow</ShadowBox>
      <BorderColorBox>Border Color</BorderColorBox>
      <SkewBox>Skew</SkewBox>
      <GradientBox>Gradient</GradientBox>
      <TextColorBox>Text Color</TextColorBox>
      <BlurBox>Blur</BlurBox>
      <CombinedBox>Combined</CombinedBox>
      <SizeTransitionBox>Size</SizeTransitionBox>
      <PerspectiveBox>3D</PerspectiveBox>
      <FlipContainer>
        <FlipBox>
          <Front>Front</Front>
          <Back>Back</Back>
        </FlipBox>
      </FlipContainer>
     <TextShadowBox>Text Shadow</TextShadowBox>
     <BorderThicknessBox>Border</BorderThicknessBox>
     <FilterBox>Filter</FilterBox>
     <ClipPathBox>Clip-Path</ClipPathBox>
     <ZIndexBox>Z-Index</ZIndexBox>
     <TransformOriginBox>Origin</TransformOriginBox>
     <CursorBox>Cursor</CursorBox>
     <ImageZoomBox>
       <img src="https://picsum.photos/250/200?random=5" alt="Zoom" />
     </ImageZoomBox>
     <LetterSpacingBox>Letter Spacing</LetterSpacingBox>
     <WordSpacingBox>Word Spacing</WordSpacingBox>
     <PaddingBox>Padding</PaddingBox>
     <ColorTransitionBox>Color Transition</ColorTransitionBox>
     </BoxContainer>
    </PageContainer>
  );
};

export default Transitions;
