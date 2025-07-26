import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Navigation.css'; 
import { useState } from 'react';
const Navigation = () => {
  const navigate = useNavigate();
  const [mathOpen, setMathOpen] = useState(false); // toggle state
  const handleMathClick = () => {
    setMathOpen(!mathOpen);
  };
  return (
    <div className="top-nav">
      <ul>
        <li onClick={() => navigate('')}>Home</li>
        <li onClick={() => navigate('me/dogtown')}>Dog Town</li>
        {/* <li onClick={() => navigate('/services')}>Services</li> */}
        {/* <li onClick={() => navigate('/me/math')}>Math</li> */}


        <li className= "dropdown" onClick={handleMathClick}>
          Math {mathOpen ? '▼' : '▶'}
        </li>

        {mathOpen && (
          <ul className="sub-menu">
            <li style={{marginLeft:"10px"}} onClick={() => navigate('/me/math/d4')}>D4</li>
            <li style={{marginLeft:"10px"}} onClick={() => navigate('/me/math')}>Geometry</li>
            <li style={{marginLeft:"10px"}} onClick={() => navigate('/me/math')}>Calculus</li>
          </ul>
        )}
        
      </ul>
    </div>
  );
};

export default Navigation;



