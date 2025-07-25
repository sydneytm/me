import * as React from 'react'
import './css/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Home } from './screens/Home.jsx';
import { DogTown } from './screens/dogTown.jsx';
import { Math } from './screens/Math/Math.jsx';
function App() {
  return (
    <Router>
    <Navigation />
    <div style={{ marginLeft: '250px', padding: '20px' }}>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/me/dogtown" element={<DogTown />} />
        {/* {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/me/math" element={<Math />} /> 
      </Routes>
    </div>
  </Router>
  )
}

export default App
