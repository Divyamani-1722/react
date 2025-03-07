import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='app-container'>
      {!isLoggedIn ? (
        <div className='login-card'>
          <h2 className='login-title'>Login Page</h2>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='login-input'
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='login-input'
          />
          <button className='login-button' onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : (
        <div className='welcome-message'>
          <h1>Welcome, {username}!</h1>
        </div>
      )}
    </div>
  );
};

export default App;
