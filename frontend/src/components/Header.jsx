import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="w-full text-white">
        <div className="max-w-screen-xl mx-auto flex justify-center items-center p-5">
          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="menu-link">Home</Link></li>
              <li><Link to="/collision-info-request" className="menu-link">Collision Info Request</Link></li>
              <li><Link to="/parking-availability" className="menu-link">Parking Availability</Link></li>
              <li><Link to="/explore-tools" className="menu-link">Explore Tools</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
export default Header;
