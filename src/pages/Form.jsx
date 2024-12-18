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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// General Form Elements
const Input = styled.input`
  display: block;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Select = styled.select`
  display: block;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;

const Radio = styled.input.attrs({ type: "radio" })`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  display:block;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  display:block;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Input Placeholder Styling
const PlaceholderInput = styled(Input)`
  &::placeholder {
    color: #888;
    font-style: italic;
  }
`;

// Form Validation
const ValidationInput = styled(Input)`
  &:valid {
    border-color: green;
  }

  &:invalid {
    border-color: red;
  }
`;

// Checkbox and Radio Buttons
const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CheckboxInput = styled.input`
  accent-color: #007bff; /* Customize checkbox and radio button color */
`;

// Range Input
const RangeInput = styled.input.attrs({ type: "range" })`
  width: 100%;
  margin: 10px 0;
`;

// File Input
const FileInput = styled.input.attrs({ type: "file" })`
  padding: 5px;
  font-size: 16px;
`;

// Custom Select Menu
const CustomSelect = styled(Select)`
  appearance: none;
  background: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23333' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")
    no-repeat right 10px center;
  background-color: white;
`;

const FormStyling = () => {
  return (
    <Container>
      <h1>Learn Form Styling with Styled Components</h1>
      <Form>
        {/* Basic Form Elements */}
        <Section>
          <Title>1. Form Elements</Title>
          <Input type="text" placeholder="Text Input" />
          <Select>
            <option>Option 1</option>
            <option>Option 2</option>
          </Select>
          <Textarea rows="4" placeholder="Textarea"></Textarea>
          <Button>Submit</Button>
        </Section>

        {/* Placeholder Styling */}
        <Section>
          <Title>2. Placeholder Styling</Title>
          <PlaceholderInput placeholder="Styled placeholder" />
        </Section>

        {/* Form Validation */}
        <Section>
          <Title>3. Form Validation</Title>
          <ValidationInput type="text" placeholder="Validates on input" required />
        </Section>

        {/* Checkbox and Radio Buttons */}
        <Section>
          <Title>4. Checkbox and Radio Button Customization</Title>
          <CheckboxLabel>
            <CheckboxInput type="checkbox" /> Checkbox
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput type="radio" name="radio-group" /> Radio Button
          </CheckboxLabel>
        </Section>

        {/* Range Input */}
        <Section>
          <Title>5. Range Input Styling</Title>
          <RangeInput min="0" max="100" />
        </Section>

        {/* File Input */}
        <Section>
          <Title>6. File Input Styling</Title>
          <FileInput />
        </Section>

        {/* Custom Select Menu */}
        <Section>
          <Title>7. Custom Select Menu</Title>
          <CustomSelect>
            <option>Custom Option 1</option>
            <option>Custom Option 2</option>
          </CustomSelect>
        </Section>
      </Form>
    </Container>
  );
};

export default FormStyling;
