import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="w-full bg-gray-800 text-white">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center p-5">
          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/collision-info-request" className="hover:text-gray-300">Collision Info Request</Link></li>
              <li><Link to="/parking-availability" className="hover:text-gray-300">Parking Availability</Link></li>
              <li><Link to="/explore-tools" className="hover:text-gray-300">Explore Tools</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
export default Header;
