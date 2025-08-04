

import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    bio: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     // await API.post('/auth/register', form);
     await API.post('/register', form);

      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="bio" placeholder="Bio" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
