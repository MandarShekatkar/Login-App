import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios';
import '../styles/auth.css';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post("/auth/register", formData);
            if (data.success) {
                alert("Register Successfully");
                navigate("/dashboard");
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Something Went Wrong");
        }
    }
    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type='text'
                    name='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                />

                <button className="link-button" type='Submit'>Register</button>
                <p>Already Have An Account?{" "}
                    <button
                        type='button'
                        onClick={() => navigate('/')}
                    >Login Here</button>
                </p>
            </form>
        </div>
    )
}

export default Register
