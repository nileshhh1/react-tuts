import React, { useState } from 'react';
import './AuthForm.css'; // Create and import the CSS file for styling

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
      console.log("Logging in...");
    } else {
      // Handle registration logic
      console.log("Registering...");
    }
  };

  return (
    <div className="auth-container">
      <div className="form-wrapper">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" required />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" name="confirmPassword" id="confirmPassword" required />
            </div>
          )}
          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p onClick={handleFormSwitch} className="toggle-form">
          {isLogin ? 'New user? Register here' : 'Already have an account? Login here'}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
