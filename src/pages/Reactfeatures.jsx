import React, { useState, useEffect, createContext, useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Dark Mode Context
const ThemeContext = createContext();

const darkTheme = {
  background: '#333',
  color: '#fff',
};

const lightTheme = {
  background: '#fff',
  color: '#000',
};

// Styled Components
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

// Dark Mode Hook
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);
  return { isDark, toggleTheme };
};

// Authentication Hook (Mock JWT Authentication)
const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      // Replace with your API call
      const response = await axios.post('https://api.example.com/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('jwt', token);
      setUser({ email });
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error('Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    setUser(null);
    toast.success('Logged out successfully');
  };

  const checkAuth = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setUser({ email: 'user@example.com' });
    }
  };

  return { user, login, logout, checkAuth };
};

// Role-based access component

// Modal Component
const ModalComponent = ({ close }) => {
  return (
    <ModalBackdrop>
      <Modal>
        <h2>Modal Title</h2>
        <p>This is a modal using React Portals</p>
        <Button onClick={close}>Close</Button>
      </Modal>
    </ModalBackdrop>
  );
};

// Main Page Component
const HomePage = () => {
  const { isDark, toggleTheme } = useDarkMode();
  const { user, login, logout, checkAuth } = useAuth();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <h1>{user ? `Welcome, ${user.email}` : 'Welcome to the App'}</h1>
        <Button onClick={toggleTheme}>
          Toggle Dark Mode
        </Button>

        <Button onClick={() => setShowModal(true)}>Show Modal</Button>
        {showModal && <ModalComponent close={() => setShowModal(false)} />}

        {!user ? (
          <>
            <Button onClick={() => login('user@example.com', 'password')}>Login</Button>
          </>
        ) : (
          <>
              <h2>Admin Page</h2>
              <p>This page is protected with Role-Based Access Control.</p>
          </>
        )}
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
};

const Reactfeatures = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default Reactfeatures;
