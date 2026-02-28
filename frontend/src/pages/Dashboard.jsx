import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios';
import '../styles/auth.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const fetchUser = async ()=>{
            try {
                const {data} = await api.get('/auth/me');

                if(data.success){
                    setUser(data.user);
                }else{
                    navigate('/');
                }
            } catch (error) {
                navigate('/')
            }
        };
        fetchUser();
    },[navigate]);

    const handleLogout = async()=>{
        try {
            await api.post("/auth/logout");
            navigate('/');
        } catch (error) {
            console.log(error);
            
        }
    }

    if(!user) return <h3>Loading...</h3>;

  return (
    <div className="dashboard">
      <h2>Welcome To Dashboard</h2>
      <p>Welcome, {user.name}</p>
      <p>Email: {user.email}</p>
      <button 
      className="link-button"
      onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
