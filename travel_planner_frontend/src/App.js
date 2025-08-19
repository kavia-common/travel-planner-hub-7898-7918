import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Itinerary from './pages/Itinerary';
import Share from './pages/Share';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/itinerary/:id" element={<Itinerary />} />
            <Route path="/share/:id" element={<Share />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
