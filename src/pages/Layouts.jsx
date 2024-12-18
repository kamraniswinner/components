import React from "react";
import styled from "styled-components";

// CSS Variables
const ThemeContainer = styled.div`
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --bg-color: #f8f9fa;
  --text-color: #343a40;

  font-family: Arial, sans-serif;
  color: var(--text-color);
  background-color: var(--bg-color);
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

// Grid Auto-Placement
const AutoGrid = styled.div`
  display: grid;
  grid-auto-rows: 100px;
  grid-auto-flow: ${({ flow }) => flow || "row"};
  gap: 10px;
  border: 2px solid var(--secondary-color);
  padding: 10px;
`;

const GridItem = styled.div`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Grid Template Areas
const TemplateGrid = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 1fr 2fr 1fr;
  height: 300px;
  gap: 5px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .header {
    grid-area: header;
    background-color: var(--primary-color);
  }

  .sidebar {
    grid-area: sidebar;
    background-color: var(--secondary-color);
  }

  .content {
    grid-area: content;
    background-color: #17a2b8;
  }

  .footer {
    grid-area: footer;
    background-color: #28a745;
  }
`;

// Multi-Column Layout
const MultiColumn = styled.div`
  column-count: 2;
  column-gap: 15px;
  border: 1px solid var(--secondary-color);
  padding: 10px;

  p {
    margin: 0 0 10px;
    break-inside: avoid;
  }
`;

// Flexbox vs Grid
const FlexboxVsGrid = styled.div`
  display: flex;
  gap: 10px;

  > div {
    flex: 1;
    display: grid;
    place-items: center;
    border: 2px solid var(--primary-color);
    padding: 20px;
  }
`;

// Nested Flexbox Layouts
const NestedFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid var(--secondary-color);
  padding: 10px;

  > div {
    display: flex;
    justify-content: space-around;
    border: 1px solid var(--primary-color);
    padding: 10px;
  }
`;

// Equal Height Columns
const EqualHeightContainer = styled.div`
  display: flex;
  gap: 10px;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background-color: var(--primary-color);
    color: white;
  }
`;

// Vertical Centering Techniques
const VerticalCentering = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: var(--secondary-color);
  color: white;
`;

// Sticky Footer Layout
const StickyFooterLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    color: white;
  }

  .footer {
    height: 50px;
    background-color: var(--secondary-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Layouts = () => {
  return (
    <ThemeContainer>
      <h1>Advanced Layouts with Styled Components</h1>

      {/* CSS Variables */}
      <Section>
        <Title>1. CSS Variables</Title>
        <p>Primary color is: <span style={{ color: "var(--primary-color)" }}>Blue</span></p>
      </Section>

      {/* Grid Auto-Placement */}
      <Section>
        <Title>2. CSS Grid Auto-Placement</Title>
        <AutoGrid flow="row">
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
        </AutoGrid>
      </Section>

      {/* Grid Template Areas */}
      <Section>
        <Title>3. Grid Template Areas</Title>
        <TemplateGrid>
          <div className="header">Header</div>
          <div className="sidebar">Sidebar</div>
          <div className="content">Content</div>
          <div className="footer">Footer</div>
        </TemplateGrid>
      </Section>

      {/* Multi-Column Layout */}
      <Section>
        <Title>4. CSS Multi-Column Layout</Title>
        <MultiColumn>
          <p>Column 1</p>
          <p>Column 2</p>
          <p>Column 3</p>
          <p>Column 4</p>
          <p>Column 5</p>
        </MultiColumn>
      </Section>

      {/* Flexbox vs Grid */}
      <Section>
        <Title>5. CSS Flexbox vs Grid</Title>
        <FlexboxVsGrid>
          <div>Flexbox</div>
          <div>Grid</div>
        </FlexboxVsGrid>
      </Section>

      {/* Nested Flexbox Layouts */}
      <Section>
        <Title>6. Nested Flexbox Layouts</Title>
        <NestedFlex>
          <div>
            <span>Item 1</span>
            <span>Item 2</span>
          </div>
          <div>
            <span>Item 3</span>
            <span>Item 4</span>
          </div>
        </NestedFlex>
      </Section>

      {/* Equal Height Columns */}
      <Section>
        <Title>7. Equal Height Columns</Title>
        <EqualHeightContainer>
          <div>Column 1</div>
          <div>Column 2</div>
        </EqualHeightContainer>
      </Section>

      {/* Vertical Centering Techniques */}
      <Section>
        <Title>8. Vertical Centering Techniques</Title>
        <VerticalCentering>Centered Content</VerticalCentering>
      </Section>

      {/* Sticky Footer Layout */}
      <Section>
        <Title>9. Sticky Footer Layout</Title>
        <StickyFooterLayout>
          <div className="content">Main Content</div>
          <div className="footer">Sticky Footer</div>
        </StickyFooterLayout>
      </Section>
    </ThemeContainer>
  );
};

export default Layouts;
