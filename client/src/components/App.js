import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import LoginForm from './loginForm.js';
import RegisterForm from './registerForm.js';

function App() {
  return (
    <div className="container-fluid px-0">
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
