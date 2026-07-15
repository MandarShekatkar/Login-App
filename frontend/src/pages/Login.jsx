import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'
import '../styles/auth.css';

const Login = () => {
  const navigate = useNavigate()

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await api.get("/auth/me");

        if (data.success) {
          navigate("/dashboard");
        }

      } catch (error) {

      } finally {
        setCheckingAuth(false);
      }
    };
    checkAuth();
  }, [navigate]);

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/login", formData);

      if (data.success) {
        navigate("/dashboard");
      } else {
        alert(data.message);
      }

    } catch (error) {
      alert("Login Failed")
    }
  };

  if (checkingAuth) return <h3>Loading...</h3>;

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <button className="link-button" type='submit'>Login</button>

        <p>
          New User?{" "}
          <button
            type='button'
            onClick={() => navigate('/register')}
          >
            Register Here
          </button>
        </p>
      </form>
    </div>
  )
}
export default Login