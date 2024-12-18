import React, { useState, useReducer, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { useForm } from 'react-hook-form';

// Styled-components for layout
const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Text = styled.p`
  font-size: 16px;
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
`;

// 1. Controlled Forms with useState
const ControlledForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Controlled Form Submitted:', formData);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};

// 2. Form Validation with useReducer
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
};

const ValidatedForm = () => {
  const initialState = { name: '', email: '', errors: {} };
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!state.name) errors.name = 'Name is required';
    if (!state.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(state.email)) errors.email = 'Email is invalid';
    dispatch({ type: 'SET_ERRORS', errors });
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Validated Form Submitted:', state);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      {state.errors.name && <Error>{state.errors.name}</Error>}
      <Input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {state.errors.email && <Error>{state.errors.email}</Error>}
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};

// 3. Using Formik for Form Handling
const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = 'Name is required';
      if (!values.email) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email is invalid';
      return errors;
    },
    onSubmit: (values) => {
      console.log('Formik Form Submitted:', values);
    },
  });

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Name"
      />
      {formik.touched.name && formik.errors.name && <Error>{formik.errors.name}</Error>}
      <Input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Email"
      />
      {formik.touched.email && formik.errors.email && <Error>{formik.errors.email}</Error>}
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};

// 4. React Hook Form
const HookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('React Hook Form Submitted:', data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        {...register('name', { required: 'Name is required' })}
        placeholder="Name"
      />
      {errors.name && <Error>{errors.name.message}</Error>}
      <Input
        type="email"
        {...register('email', { required: 'Email is required' })}
        placeholder="Email"
      />
      {errors.email && <Error>{errors.email.message}</Error>}
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};

// 5. Dynamic Forms (Adding and Removing Fields)
const DynamicForm = () => {
  const [fields, setFields] = useState([{ name: '' }]);

  const handleAddField = () => {
    setFields([...fields, { name: '' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleChange = (e, index) => {
    const newFields = [...fields];
    newFields[index].name = e.target.value;
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dynamic Form Submitted:', fields);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <Input
            type="text"
            value={field.name}
            onChange={(e) => handleChange(e, index)}
            placeholder={`Field ${index + 1}`}
          />
          <Button type="button" onClick={() => handleRemoveField(index)}>
            Remove Field
          </Button>
        </div>
      ))}
      <Button type="button" onClick={handleAddField}>
        Add Field
      </Button>
      <Button type="submit">Submit</Button>
    </FormWrapper>
  );
};

// Main App Component
const ReactForms = () => {
  return (
    <Container>
      <Title>Forms in React</Title>

      <h2>1. Controlled Form with useState</h2>
      <ControlledForm />

      <h2>2. Form Validation with useReducer</h2>
      <ValidatedForm />

      <h2>3. Formik for Form Handling</h2>
      <FormikForm />

      <h2>4. React Hook Form</h2>
      <HookForm />

      <h2>5. Dynamic Forms (Adding and Removing Fields)</h2>
      <DynamicForm />
    </Container>
  );
};

export default ReactForms;
