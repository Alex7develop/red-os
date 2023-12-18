import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LoginPage from './components/LoginPage/LoginPage';
import BrowsePage from './components/BrowesPage/BrowsePage';
import HomePage from './components/HomePage/HomePage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/browse" element={<BrowsePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
