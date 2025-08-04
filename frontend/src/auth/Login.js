
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { loginUser } from '../services/api';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      login(res.data);
      navigate('/profile');
    } catch {
      alert('Login failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

