import React from 'react';
import TeamSection from './TeamSection';
import GradientLine from './GradientLine';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

  const navigate = useNavigate();

  // Function to navigate to a new path
  const handleNavigate = (path) => {
      navigate(path);
  };


  return (
    <div className="container mx-auto mt-10">
      <div className="mt-10 text-center">
        <h1 className="text-6xl font-bold p-6 text-offWhite">Traffic Data Democratize</h1>
      </div>

      {/* Button Section */}
      <div class="homepageButtons flex justify-center mt-3 gap-2 py-10">
      <button className="homepage-btn"
                onClick={() => navigate('/collision-info-request')}>
                Collision Info Request
            </button>
            <button
                className="homepage-btn"
                onClick={() => navigate('/parking-availability')}>
                Parking Availability
            </button>
            <button
                className="homepage-btn"
                onClick={() => navigate('/explore-tools')}>
                Explore Tools
            </button>
      </div>

      {/* A JSX comment */}
      <TeamSection />
      <GradientLine />
      <div className="Footer min-h-screen"></div>
    </div>

  );
}

export default HomePage;