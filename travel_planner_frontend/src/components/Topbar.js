import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="user-info">
        <span>Welcome, User!</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Topbar;
