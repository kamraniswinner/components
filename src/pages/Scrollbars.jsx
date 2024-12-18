import React from "react";
import styled from "styled-components";

// Styled component for the container
const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  background-color: #f4f4f4;
  padding: 20px;
  font-family: Arial, sans-serif;
  border: 2px solid #ddd;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 12px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0; /* Track color */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4caf50; /* Thumb color */
    border-radius: 10px;
    border: 3px solid #f0f0f0; /* Border around thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #45a049; /* Thumb color on hover */
  }

  &::-webkit-scrollbar-corner {
    background-color: #f0f0f0; /* Corner of scrollbar */
  }
`;

// Styled component for the content inside the container
const Content = styled.div`
  height: 1000px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
`;

const Scrollbars = () => {
  return (
    <Container>
      <h1>Learn CSS Scrollbars Styling</h1>
      <p>Scroll down to see the custom scrollbar styles in action.</p>

      <Content>
        <p>
          This content is scrollable, and the scrollbar has been customized using the CSS pseudo-elements.
        </p>
        <p>
          Scrollbars have several parts that can be styled:
          <ul>
            <li><code>::-webkit-scrollbar</code>: The scrollbar itself.</li>
            <li><code>::-webkit-scrollbar-track</code>: The track (background) of the scrollbar.</li>
            <li><code>::-webkit-scrollbar-thumb</code>: The draggable part of the scrollbar.</li>
            <li><code>::-webkit-scrollbar-corner</code>: The bottom corner where horizontal and vertical scrollbars meet.</li>
          </ul>
        </p>
        <p>
          Try scrolling to see how the scrollbar changes as you interact with it.
        </p>
      </Content>
    </Container>
  );
};

export default Scrollbars;
