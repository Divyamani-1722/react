import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignUpForm />} />
    </Routes>
  </Router>
);

export default App;