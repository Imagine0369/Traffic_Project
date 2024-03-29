import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CollisionInfoRequest from './components/CollisionInfoRequest';
import ParkingAvailability from './components/ParkingAvailability';
import ExploreTools from './components/ExploreTools';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collision-info-request" element={<CollisionInfoRequest />} />
          <Route path="/parking-availability" element={<ParkingAvailability />} />
          <Route path="/explore-tools" element={<ExploreTools />} />
      
        </Routes>
      </>
    </Router>
  );
}

export default App;