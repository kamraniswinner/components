import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/productList.jsx';
import Cart from './pages/Cart.jsx';
import Transitions from './pages/Transitions';
import Animations from './pages/Animations';
import { ErrorBoundary } from 'react-error-boundary';
import Positioning from './pages/Positioning.jsx';  // Import PositioningPage
import DisplayPractice from './pages/DisplayPractice.jsx'
import Flexbox from './pages/Flexbox.jsx'
import Grid from './pages/Grid.jsx'
import Form from './pages/Form.jsx'
import Layouts from './pages/Layouts.jsx'
import Pseudo from './pages/Pseudo.jsx'
import Animate from './pages/Animate.jsx'
import ChainingAnimations from './pages/ChainingAnimations';
import Scrollbars from './pages/Scrollbars.jsx'
import Accessebility from './pages/Accessebility.jsx'
import ReactBasics from './pages/ReactBasics.jsx';
import Reacthooks from './pages/Reacthooks.jsx';
import Advancedreact from './pages/Advancedreact';
import ReactPerformanceOptimization from './pages/Reactperformanceoptimization.jsx';
import ReactForm from './pages/ReactForms.jsx'
import Reactfeatures from './pages/Reactfeatures.jsx'


// Fallback component that will be displayed in case of an error
const FallbackComponent = ({ error, resetErrorBoundary }) => (
  <div>
    <h2>Something went wrong:</h2>
    <p>{error.message}</p>
    <button onClick={resetErrorBoundary}>Try Again</button>
  </div>
);

function App() { 
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/transitions" element={<Transitions />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/positioning" element={<Positioning />} />
          <Route path="/display" element={<DisplayPractice />} />
          <Route path="/flexbox" element={<Flexbox />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/form" element={<Form />} />
          <Route path="/layouts" element={<Layouts />} />
          <Route path="/pseudo" element={<Pseudo />} />
          <Route path="/animate" element={<Animate />} />
          <Route path="/chaining" element={<ChainingAnimations />} />
          <Route path="/scrollbars" element={<Scrollbars />} />
          <Route path="/accessebility" element={<Accessebility />} />
          <Route path="/reactbasics" element={<ReactBasics />} />
          <Route path="/reacthooks" element={<Reacthooks />} />
          <Route path="/advancedreact" element={<Advancedreact />} />
          <Route path="/reactperformance" element={<ReactPerformanceOptimization />} />
          <Route path="/reactforms" element={<ReactForm />} />
          <Route path="/reactfeatures" element={<Reactfeatures />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;