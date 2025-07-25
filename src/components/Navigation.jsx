import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Navigation.css'; 

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li onClick={() => navigate('')}>Home</li>
        <li onClick={() => navigate('/dogtown')}>Dog Town</li>
        {/* <li onClick={() => navigate('/services')}>Services</li> */}
        <li onClick={() => navigate('/math')}>Math</li>
      </ul>
    </div>
  );
};

export default Navigation;



