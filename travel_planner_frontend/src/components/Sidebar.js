import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Travel Planner</h2>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink to="/itinerary/new">Create Itinerary</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
