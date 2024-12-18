import React from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Heading = styled.h1`
  color: #2c3e50;
`;

const SubHeading = styled.h2`
  color: #34495e;
  margin-top: 30px;
`;

const FormSection = styled.section`
  margin: 20px 0;
`;

const Form = styled.form`
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 5px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #34495e;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #2980b9;
  }

  &:focus {
    outline: 3px solid #e74c3c;
  }
`;

// ARIA Landmarks
const MainContent = styled.main`
  margin: 20px 0;
  padding: 20px;
  background-color: #f4f4f4;
`;

const Header = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Footer = styled.footer`
  background-color: #34495e;
  color: white;
  padding: 10px;
  text-align: center;
`;

// Page component
const Accessibility = () => {
  return (
    <Container>
      {/* Header with ARIA landmark */}
      <Header role="banner">
        <Heading>Accessibility Best Practices</Heading>
      </Header>

      {/* Main content with ARIA landmark */}
      <MainContent role="main">
        <SubHeading>Accessible Forms</SubHeading>
        <FormSection>
          <Form>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              aria-describedby="nameHelp"
            />
            <small id="nameHelp" className="form-text text-muted">
              Please enter your full name.
            </small>

            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              aria-required="true"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We will never share your email.
            </small>

            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows="4"
              aria-describedby="messageHelp"
            ></Textarea>
            <small id="messageHelp" className="form-text text-muted">
              Enter your message here.
            </small>

            <Button type="submit">Submit</Button>
          </Form>
        </FormSection>

        <SubHeading>Focus Styles</SubHeading>
        <p>
          Notice how the submit button has a distinct focus style when clicked or navigated to using the keyboard.
        </p>
        <Button>Click Me!</Button>

        <SubHeading>Keyboard Navigation</SubHeading>
        <p>
          Use <strong>Tab</strong> to navigate between the form fields and the buttons. 
          You should be able to focus on each element in order.
        </p>
      </MainContent>

      {/* Footer with ARIA landmark */}
      <Footer role="contentinfo">
        <p>© 2024 Accessibility Learning</p>
      </Footer>
    </Container>
  );
};

export default Accessibility;
